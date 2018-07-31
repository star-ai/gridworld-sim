import board from '../../../src/store/reducers/board';
import {
  reset,
} from '../../../src/store/actions';

const initialState = {
  isRunning: false,
  policy: null,
  stateValues: [],
  actionValues: [],
};

describe('Board reducers', () => {
  it('Should handle default state', () => {
    expect(board(undefined, {})).toEqual(initialState);
  });

  // it('Reset should set policy to null', () => {
  //   const state
  //   expect(board())
  // });
});
