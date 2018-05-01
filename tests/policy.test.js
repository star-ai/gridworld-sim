import Policy from '../src/lib/policy';

test('test policy random initialisation', () => {
  const policy = new Policy(16, 4);
  const actionProb = policy.getActionProbability(0, 0);
  expect(actionProb).toBe(1/4);
});

test('test update action probability', () => {
  const policy = new Policy(16, 4);
  const newPolicy = policy.updateActionProbability(1, 0, 1);
  const actionProb = newPolicy.getActionProbability(1, 0);
  expect(actionProb).toBe(1);
  const otherActionProb = newPolicy.getActionProbability(1, 1);
  expect(otherActionProb).toBe(0);
  const otherStateActionProb = newPolicy.getActionProbability(2, 1);
  expect(otherStateActionProb).toBe(1 / 4);
});
