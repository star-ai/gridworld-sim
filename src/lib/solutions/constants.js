import { policyEvaluation, policyIteration } from './dp';

export const POLICY_ITERATION_FUNCTION = 'POLICY_ITERATION';
export const POLICY_EVALUATION_FUNCTION = 'POLICY_EVALUATION';

export const FunctionNames = Object.freeze({
  [POLICY_ITERATION_FUNCTION]: 'Policy Iteration',
  [POLICY_EVALUATION_FUNCTION]: 'Policy Evaluation',
});

export const Functions = Object.freeze({
  [POLICY_EVALUATION_FUNCTION]: policyEvaluation,
  [POLICY_ITERATION_FUNCTION]: policyIteration,
});
