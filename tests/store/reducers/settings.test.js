import settings from '../../../src/store/reducers/settings';
import {
  setGridSize,
  setTheta,
  setFunction,
  updateEndStates,
} from '../../../src/store/actions';

const initState = {
  gridSize: '4x4',
  selectedFunction: 'policy_evaluation', // TODO: replace with constant
  endStateIndices: [0, 15],
  theta: 0.0001,
};

describe('Settings reducers', () => {
  it('Should handle initial state', () => {
    expect(settings(undefined, {})).toEqual(initState);
  });

  it('Set grid size should update grid size', () => {
    const newGridSize = '10x12';
    expect(
      settings(undefined, setGridSize(newGridSize))).toEqual({
      ...initState,
      gridSize: newGridSize,
    });
  });

  it('Set theta should update the state correctly', () => {
    const newTheta = 1.122;
    expect(settings(undefined, setTheta(newTheta))).toEqual({
      ...initState,
      theta: newTheta,
    });
  });

  it('Set function should update the state', () => {
    const func = Object();
    expect(settings(undefined, setFunction(func))).toEqual({
      ...initState,
      selectedFunction: func,
    });
  });

  it('Update end states should add states if they are not in the list', () => {
    const newIndex = 5;
    expect(settings(undefined, updateEndStates(newIndex))).toEqual({
      ...initState,
      endStateIndices: [...initState.endStateIndices, newIndex],
    });
  });

  it('Update end states should remove existing state index', () => {
    expect(settings(undefined, updateEndStates(15))).toEqual({
      ...initState,
      endStateIndices: [0],
    });
  });
});
