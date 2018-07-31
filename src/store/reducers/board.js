import {
  RESET,
  SET_RUNNING,
  SET_POLICY,
  SET_STATE_VALUES,
  SET_ACTION_VALUES,
} from '../constants/ActionTypes';

const initialState = {
  isRunning: false,
  policy: null,
  stateValues: [],
  actionValues: [],
};

export default function board(state = initialState, action) {
  switch (action.type) {
    case RESET:
      throw Error('Not implemented');

    case SET_RUNNING:
      throw Error('Not implemented');

    case SET_POLICY:
      throw Error('Not implemented');

    case SET_STATE_VALUES:
      throw Error('Not implemented');

    case SET_ACTION_VALUES:
      throw Error('Not implemented');

    default:
      return state;
  }
}
