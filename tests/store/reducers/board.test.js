import board from '../../../src/store/reducers/board';
import { setEnvironment } from '../../../src/store/actions';
// import {
//   POLICY_EVALUATION_FUNCTION,
//   Functions,
//   FunctionNames,
// } from '../../../src/lib/solutions/constants';

const initialState = {
  isRunning: false,
  policy: null,
  func: null,
  env: null,
  stateValues: [],
  actionValues: [],
};

describe('Board reducers', () => {
  it('Should handle default state', () => {
    expect(board(undefined, {})).toEqual(initialState);
  });

  it('Set environment should update policy, env and func on state', () => {
    const env = Object();
    const func = () => console.log('test');
    const policy = Object();
    expect(board(undefined, setEnvironment(env, func, policy))).toEqual({
      ...initialState,
      env,
      func,
      policy,
    });
  });
});
