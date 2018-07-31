import React, { Component } from 'react';
import T from 'prop-types';

import { DropdownList, UrlButton, TextInput } from './controls';

export default class GridSettings extends Component {
  static getDerivedStateFromProps(props) {
    return {
      gridSize: props.selectedGridSize.join('x'),
      theta: props.theta,
    };
  }

  constructor(props) {
    super(props);
    // this.state = {
    //   gridSize: [4, 4],
    //   theta: 0.000001,
    // };

    this.handleGridSizeChange = this.handleGridSizeChange.bind(this);
    this.handleEndStatesChange = this.handleEndStatesChange.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handleRunButtonClick = this.handleRunButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.handleThetaChange = this.handleThetaChange.bind(this);
  }

  componentDidMount() {
    this.endStates = this.props.endStates.join(', ');
  }

  handleNextButtonClick(e) {
    if (this.props.isRunning) {
      e.preventDefault();
      return;
    }
    this.props.onNextButtonClicked(e);
  }

  handleRunButtonClick(e) {
    if (!this.props.isRunning) {
      this.props.onRunButtonClicked(e);
    } else {
      this.props.onStopButtonClicked(e);
    }
  }

  handleGridSizeChange(e) {
    if (this.props.isRunning) {
      e.preventDefault();
      return;
    }
    this.props.onGridSizeChanged(e);
    this.setState({ gridSize: e.target.value });
  }

  handleEndStatesChange(e) {
    const states = [];
    if (e.target.value) {
      const input = e.target.value.split(',').map(s => parseInt(s.trim(), 10));
      for (const val of input) {
        if (!isNaN(val)) {
          states.push(val);
        }
      }
    }
    this.props.onEndStatesChanged(states);
  }

  handleResetButtonClick(e) {
    if (this.props.isRunning) {
      e.preventDefault();
      return;
    }
    this.props.onResetButtonClicked();
  }

  handleThetaChange(e) {
    const theta = parseFloat(e.target.value);
    this.props.onThetaChanged(theta);
    this.setState({ theta });
  }

  render() {
    return (
      <GridSettings>
        <fieldset>
          <legend>Settings</legend>

          {/* <DropdownList
            className="grid-options"
            values={this.props.gridSizeOptions}
            label="Grid Size:"
            selected={this.state.gridSize}
            disabled={this.props.isRunning}
            onChange={this.handleGridSizeChange}
          />

          <TextInput
            label="End States:"
            defaultValue={this.endStates}
            className="txt-input"
            keyboardType="numeric"
            disabled={this.props.isRunning}
            onChange={this.handleEndStatesChange}
          />

          <TextInput
            label="Theta:"
            defaultValue={this.state.theta.toString()}
            className="txt-input"
            keyboardType="numeric"
            disabled={this.props.isRunning}
            onChange={this.handleThetaChange}
          />

          <UrlButton
            className="button"
            text="Next Step"
            disabled={this.props.isRunning}
            onClick={this.handleNextButtonClick}
          />

          <UrlButton
            className="button"
            text={this.props.isRunning ? 'Stop' : 'Run'}
            onClick={this.handleRunButtonClick}
          />

          <UrlButton
            className="button"
            text="Reset"
            onClick={this.handleResetButtonClick}
          /> */}
        </fieldset>
      </GridSettings>
    );
  }
}
GridSettings.propTypes = {
  endStates: T.arrayOf(T.number).isRequired,
  selectedGridSize: T.arrayOf(T.number).isRequired,
  theta: T.number.isRequired,
  isRunning: T.bool.isRequired,
  gridSizeOptions: T.arrayOf(T.object).isRequired,
  onRunButtonClicked: T.func.isRequired,
  onNextButtonClicked: T.func.isRequired,
  onStopButtonClicked: T.func.isRequired,
  onResetButtonClicked: T.func.isRequired,
  onGridSizeChanged: T.func.isRequired,
  onEndStatesChanged: T.func.isRequired,
  onThetaChanged: T.func.isRequired,
};
