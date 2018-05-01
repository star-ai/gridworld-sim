export default class Policy {
  constructor(statesN, actionsN, initRandom = true) {
    this.statesN = statesN;
    this.actionsN = actionsN;
    this.probabilities = Array(this.statesN);

    if (initRandom) {
      this.initRandomPolicy();
    }
  }

  initRandomPolicy() {
    for (let state = 0; state < this.statesN; state++) {
      this.probabilities[state] = Array(this.actionsN).fill(1 / this.actionsN, 0);
    }
  }

  getActionProbability(state, action) {
    return this.probabilities[state][action];
  }

  updateActionProbability(state, action, prob, inplace=false) {
    let policy = this;
    if (!inplace) {
      policy = new Policy(this.statesN, this.actionsN, false);
      policy.probabilities = [...this.probabilities];
    }
    for (let a = 0; a < policy.actionsN; a++) {
      policy.probabilities[state][a] = a == action ? prob : 0;
    }
    return policy;
  }
}
