export const Actions = Object.freeze({
  LEFT: 0,
  UP: 1,
  RIGHT: 2,
  DOWN: 3,
});

export default class Gridworld2D {
  constructor(shape = [4, 4], finishStates = [0, 15]) {
    this.finishStates = finishStates;
    this.gridShape = shape;
    this.actionsN = Object.keys(Actions).length;
    this.statesN = shape[0] * shape[1];
    this.transitions = new Array(this.statesN);

    this.init();
  }

  getNewState(action, rowNum, colNum) {
    let newState = -1;
    if (action === Actions.UP) {
      newState = (Math.max(0, rowNum - 1) * this.gridShape[0]) + colNum;
    } else if (action === Actions.DOWN) {
      newState =
        (Math.max(rowNum, (rowNum + 1) % this.gridShape[0]) * this.gridShape[0]) + colNum;
    } else if (action === Actions.LEFT) {
      newState = (rowNum * this.gridShape[0]) + Math.max(0, colNum - 1);
    } else {
      newState = (rowNum * this.gridShape[0]) + Math.max(colNum, (colNum + 1) % this.gridShape[1]);
    }
    return newState;
  }

  init() {
    for (let i = 0; i < this.gridShape[0]; i++) {
      for (let j = 0; j < this.gridShape[1]; j++) {
        const state = (i * this.gridShape[0]) + j;
        const transition = new Array(this.actionsN);
        for (const [, action] of Object.entries(Actions)) {
          const done = this.finishStates.includes(state);
          const newState = done ? state : this.getNewState(action, i, j);
          const reward = done ? 0 : -1;
          const prob = 1;
          transition[action] = [
            {
              prob,
              newState,
              reward,
              done,
            },
          ];
        }
        this.transitions[state] = transition;
      }
    }
  }

  sample(state, action) {
    return this.transitions[state][action];
  }
}