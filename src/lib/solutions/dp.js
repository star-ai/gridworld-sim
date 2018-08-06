import { POLICY_EVALUATION_FUNCTION, POLICY_ITERATION_FUNCTION } from './constants';

function oneStepLookAhead(env, state, valueFunction, discountFactor) {
  const actionValues = Array(env.actionsN).fill(0);
  for (let action = 0; action < env.actionsN; action++) {
    for (const transition of env.sample(state, action)) {
      actionValues[action] +=
        transition.prob *
        (transition.reward +
          (discountFactor * valueFunction[transition.newState]));
    }
  }
  return actionValues;
}

function runIteratorFunction(fn) {
  const nextState = fn.next();
  if (nextState.done) {
    return nextState.value;
  }
  return runIteratorFunction(fn);
}

export function argmax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  let max = arr[0];
  let maxInd = 0;
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (e > max) {
      max = e;
      maxInd = i;
    }
  }
  return maxInd;
}

export function* policyEvaluation({
  policy,
  env,
  discountFactor = 1.0,
  theta = 0.00001,
}) {
  // initial state-value function
  let stateValues = Array(env.statesN).fill(0);
  while (true) {
    let delta = 0;
    const nextStates = Array(env.statesN).fill(0);
    for (let state = 0; state < env.statesN; state++) {
      let v = 0;
      for (let action = 0; action < env.actionsN; action++) {
        const actionProb = policy.getActionProbability(state, action);
        for (const transition of env.sample(state, action)) {
          v +=
            actionProb *
            transition.prob *
            (transition.reward +
              (discountFactor * stateValues[transition.newState]));
        }
      }
      delta = Math.max(delta, Math.abs(v - stateValues[state]));
      nextStates[state] = v;
    }
    stateValues = nextStates;
    if (delta <= theta) {
      // Stop evaluation.
      return {
        policy,
        stateValues,
      };
    }
    yield {
      policy,
      stateValues,
    };
  }
}

export function* policyIteration({
  policy,
  env,
  discountFactor = 1.0,
  theta = 0.00001,
}) {
  while (true) {
    const { stateValues } = runIteratorFunction(
      policyEvaluation({
        policy, env, discountFactor, theta,
      }),
    );
    let policyStable = true;
    for (let state = 0; state < env.statesN; state++) {
      const chosenAction = argmax(policy.getStateActions(state));
      const actionValues = oneStepLookAhead(
        env,
        state,
        stateValues,
        discountFactor,
      );
      const bestAction = argmax(actionValues);
      if (chosenAction !== bestAction) {
        policyStable = false;
      }

      policy.setStateBestAction(state, bestAction);
    }
    if (policyStable) {
      return { policy, stateValues };
    }
    yield { policy, stateValues };
  }
}
