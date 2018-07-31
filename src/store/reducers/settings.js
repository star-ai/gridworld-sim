import {
  SET_GRID_SIZE,
  SET_THETA,
  SET_FUNCTION,
  UPDATE_END_STATES,
} from '../constants/ActionTypes';

const initialState = {
  gridSize: '4x4',
  selectedFunction: 'policy_evaluation', // TODO: replace with constant
  endStateIndices: [0, 15],
  theta: 0.0001,
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SET_GRID_SIZE:
      return { ...state, gridSize: action.size };

    case SET_THETA:
      return { ...state, theta: action.theta };

    case SET_FUNCTION:
      return { ...state, selectedFunction: action.func };

    case UPDATE_END_STATES:
      if (state.endStateIndices.indexOf(action.ind) === -1) {
        return {
          ...state,
          endStateIndices: [...state.endStateIndices, action.ind],
        };
      }
      return {
        ...state,
        endStateIndices: state.endStateIndices.filter(ind => ind !== action.ind),
      };

    default:
      return state;
  }
}
