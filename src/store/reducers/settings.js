import {
  SET_GRID_SIZE,
  SET_THETA,
  SET_FUNCTION,
  UPDATE_END_STATES,
} from '../constants/ActionTypes';
import {
  POLICY_EVALUATION_FUNCTION,
  POLICY_ITERATION_FUNCTION,
  FunctionNames,
} from '../../lib/solutions/constants';

const initialState = {
  gridSize: '4x4',
  selectedFunction: POLICY_EVALUATION_FUNCTION,
  endStateIndices: [0, 15],
  theta: '0.0001',
};
const mapFunctionNameToFunction = {
  [FunctionNames[POLICY_EVALUATION_FUNCTION]]: POLICY_EVALUATION_FUNCTION,
  [FunctionNames[POLICY_ITERATION_FUNCTION]]: POLICY_ITERATION_FUNCTION,
};

const setGridSize = (state, gridSize) => {
  const [width, height] = gridSize.split('x').map(v => parseInt(v, 10));
  const endStateIndices = [0, (width * height) - 1];
  return { ...state, gridSize, endStateIndices };
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SET_GRID_SIZE:
      // return { ...state, gridSize: action.size };
      return setGridSize(state, action.size);

    case SET_THETA:
      return { ...state, theta: action.theta };

    case SET_FUNCTION:
      return { ...state, selectedFunction: mapFunctionNameToFunction[action.func] };

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
