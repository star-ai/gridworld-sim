import * as actions from '../../src/store/actions';
import * as types from '../../src/store/constants/ActionTypes';

describe('Settings actions', () => {
  it('Set grid size should update state grid size field', () => {
    const testSize = '6x6';
    expect(actions.setGridSize(testSize)).toEqual({
      type: types.SET_GRID_SIZE,
      size: testSize,
    });
  });

  it('Set theta should update state value', () => {
    const newTheta = 1.1;
    expect(actions.setTheta(newTheta)).toEqual({
      type: types.SET_THETA,
      theta: newTheta,
    });
  });

  it('Set function should update state value', () => {
    const newFunc = () => { console.log('test func'); };
    expect(actions.setFunction(newFunc)).toEqual({
      type: types.SET_FUNCTION,
      func: newFunc,
    });
  });

  it('Update end states should update state values', () => {
    const ind = 1;
    expect(actions.updateEndStates(ind)).toEqual({
      type: types.UPDATE_END_STATES,
      ind,
    });
  });
});

describe('Grid actions', () => {
  it('Set running should return correct type', () => {
    const isRunning = true;
    expect(actions.setRunning(isRunning)).toEqual({
      type: types.SET_RUNNING,
      isRunning,
    });
  });

  it('Set environment should return correct type', () => {
    const policy = Object();
    const func = () => console.log('test');
    const env = Object();
    expect(actions.setEnvironment(env, func, policy)).toEqual({
      type: types.SET_ENVIRONMENT,
      env,
      func,
      policy,
    });
  });

  it('Set state values should return correct type', () => {
    const values = [1, 2, 3];
    expect(actions.setStateValues(values)).toEqual({
      type: types.SET_STATE_VALUES,
      values,
    });
  });

  it('Set action values should return correct type', () => {
    const values = [1, 2, 3];
    expect(actions.setActionValues(values)).toEqual({
      type: types.SET_ACTION_VALUES,
      values,
    });
  });
});
