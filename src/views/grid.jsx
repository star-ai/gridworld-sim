import React, { Component } from 'react';

import Board from '../components/board';
import GridSettings from '../components/grid-settings';
import Policy from '../lib/policy';
import Gridworld2D from '../lib/envs/gridworld';
import { policyEvaluation } from '../lib/solutions/dp';

import './grid.css';

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.gridSizeOptions = [
      {
        value: '4x4',
        label: '4x4'
      },
      {
        value: '6x6',
        label: '6x6'
      },
      {
        value: '10x10',
        label: '10x10'
      }
    ];
    this.state = {
      gridSize: [4, 4],
      endStates: [0, 15],
      gridValues: [],
      theta: 0.00001,
      running: false,
    };

    //TODO: should be passed by app.
    this.func = null;

    this.handleGridSizeChange = this.handleGridSizeChange.bind(this);
    this.handleEndStateChange = this.handleEndStateChange.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.handleRunButtonClick = this.handleRunButtonClick.bind(this);
    this.getNextStateDelayed = this.getNextStateDelayed.bind(this);
    this.run = this.run.bind(this);
    this.handleThetaChange = this.handleThetaChange.bind(this);
    this.handleStopButtonClick = this.handleStopButtonClick.bind(this);
  }

  handleThetaChange(theta) {
    this.setState({ theta });
  }

  initEnvironment() {
    const env = new Gridworld2D(this.state.gridSize, this.state.endStates);
    const policy = new Policy(this.state.gridSize[0] * this.state.gridSize[1], 4);
    this.func = policyEvaluation({ policy, env, theta: this.state.theta });
  }

  handleNextButtonClick() {
    if (!this.func) {
      this.initEnvironment();
    }
    const valueFunction = this.func.next();
    this.setState({ gridValues: valueFunction.value });
  }

  handleGridSizeChange(e) {
    const gridSize = e.target.value.split('x').map(v => parseInt(v));
    this.setState({ gridSize });
    // TODO: add dialog to confirm grid reset.
  }

  handleEndStateChange(states) {
    this.setState({ endStates: states });
  }

  handleResetButtonClick() {
    this.func = null;
    this.setState({ gridValues: [] });
  }

  getNextStateDelayed(timeout) {
    return new Promise((resolve, abort) => {
      setTimeout(() => {
        if (this.func != null) {
          resolve(this.func.next());
        } else {
          abort(Error('function reset'));
        }
      }, timeout);
    });
  }

  async run() {
    // TODO: need to add slider for speed
    try {
      const nextState = await this.getNextStateDelayed(200);

      if (!nextState.done && this.state.running) {
        this.setState({ gridValues: nextState.value });
        this.run();
      } else {
        this.setState({ running: false });
      }
    } catch (err) {
      console.error(err);
      this.setState({ running: false });
    }
  }
    
  handleRunButtonClick() {
    if (!this.func) {
      this.initEnvironment();
    }
    this.setState({ running: true });
    this.run();
  }

  handleStopButtonClick() {
    this.setState({ running: false });
  }

  render() {
    return (
      <div>
        <GridSettings 
          gridSizeOptions={this.gridSizeOptions}
          endStates={this.state.endStates}
          className='grid-settings clr'
          theta={this.state.theta}
          selectedGridSize={this.state.gridSize}
          onGridSizeChanged={this.handleGridSizeChange}
          onEndStatesChanged={this.handleEndStateChange}
          onNextButtonClicked={this.handleNextButtonClick}
          onResetButtonClicked={this.handleResetButtonClick}
          onRunButtonClicked={this.handleRunButtonClick}
          onStopButtonClicked={this.handleStopButtonClick}
          onThetaChanged={this.handleThetaChange}
        />
        <br />
        <Board gridSize={this.state.gridSize}
               gridValues={this.state.gridValues} />
      </div>
    )
  }
}