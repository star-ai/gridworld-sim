import * as types from './constants/ActionTypes';

// Settings actions
export const setGridSize = size => ({ type: types.SET_GRID_SIZE, size });
export const setTheta = theta => ({ type: types.SET_THETA, theta });
export const setFunction = func => ({ type: types.SET_FUNCTION, func });
export const updateEndStates = ind => ({ type: types.UPDATE_END_STATES, ind });

// Grid actions
export const reset = () => ({ type: types.RESET });
export const setRunning = isRunning => ({ type: types.SET_RUNNING, isRunning });
export const setPolicy = policy => ({ type: types.SET_POLICY, policy });
export const setStateValues = values => ({ type: types.SET_STATE_VALUES, values });
export const setActionValues = values => ({ type: types.SET_ACTION_VALUES, values });
