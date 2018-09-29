import * as types from './constants/ActionTypes';
import Gridworld2D from '../lib/envs/gridworld';
import Policy from '../lib/policy';
import { Functions } from '../lib/solutions/constants';

// Settings actions
export const setGridSize = size => ({ type: types.SET_GRID_SIZE, size });
export const setTheta = theta => ({ type: types.SET_THETA, theta });
export const setFunction = (func, funcArgs) => ({ type: types.SET_FUNCTION, func, funcArgs });
export const updateEndStates = ind => ({ type: types.UPDATE_END_STATES, ind });

// Grid actions
export const setRunning = isRunning => ({ type: types.SET_RUNNING, isRunning });
export const setStateValues = values => ({ type: types.SET_STATE_VALUES, values });
export const setActionValues = values => ({ type: types.SET_ACTION_VALUES, values });

const getNextFunctionStateDelayed = (func, timeout) => (
  new Promise((resolve, abort) => {
    setTimeout(() => {
      if (func != null) {
        resolve(func.next());
      } else {
        abort(Error('function reset'));
      }
    }, timeout);
  })
);

const initFunction = settings => {
  const gridSize = settings.gridSize.split('x').map(v => parseInt(v, 10));
  const env = new Gridworld2D(gridSize, settings.endStates);
  const policy = new Policy(gridSize[0] * gridSize[1], 4);
  const func = Functions[settings.selectedFunction];
  return func({ policy, env, theta: parseFloat(settings.theta) });
};

export const setNextFunctionState = (settings, func, isRunning) => dispatch => {
  if (isRunning) {
    return;
  }

  dispatch(setRunning(true));
  const f = func === null ? initFunction(settings) : func;
  const { value } = f.next();
  if (value) {
    dispatch(setStateValues(value.stateValues));
  }
  dispatch(setRunning(false));
};

export const executeFunction = settings => dispatch => {

};
