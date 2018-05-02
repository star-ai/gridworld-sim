import Policy from '../../src/lib/policy';
import Gridworld2D, { Actions } from '../../src/lib/envs/gridworld';
import { policyEvaluation } from '../../src/lib/solutions/dp';

test('test policy evaluation function', () => {
  const policy = new Policy(16, Object.keys(Actions).length);
  const env = new Gridworld2D([4, 4], [0, 15]);
  let count = 0;
  const max_count = 100000;
  for (const stateValues of policyEvaluation(policy, env)) {
    count++;
    if (count > max_count) {
      break;
    }
  }
  expect(count).toBeLessThan(max_count);
});