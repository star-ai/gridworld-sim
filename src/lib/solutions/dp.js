export function* policyEvaluation({ policy, env, discountFactor = 1.0,
                                    theta = 0.00001 }) {
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
          v += actionProb * transition.prob
            * (transition.reward 
              + (discountFactor * stateValues[transition.newState]));
        }
      }
      delta = Math.max(delta, Math.abs(v - stateValues[state]));
      nextStates[state] = v;
    }
    stateValues = nextStates;
    if (delta <= theta) {
      // Stop evaluation.
      return stateValues;
    }
    yield stateValues;
  }
}