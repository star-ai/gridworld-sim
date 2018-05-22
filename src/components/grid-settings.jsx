import React, { Component } from 'react';

import { DropdownList, SimpleButton, TextInput } from './controls';

function handleValueChange(e) {
  console.log('Value set to', e.target.value);
}

export default class GridSettings extends Component {
  constructor(props) {
    super(props);
    this.endStates = props.endStates.join(', ');
    this.state = {
      gridSize: props.selectedGridSize.join('x'),
      theta: props.theta,
      // running: false,
    };

    this.handleGridSizeChange = this.handleGridSizeChange.bind(this);
    this.handleEndStatesChange = this.handleEndStatesChange.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handleRunButtonClick = this.handleRunButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.handleThetaChange = this.handleThetaChange.bind(this);
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
    // this.setState({ running: !this.state.running });
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
    if (e.target.value){
      const input = e.target.value.split(',').map(s => parseInt(s.trim()));
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
    // this.setState({ running: false });
    this.props.onResetButtonClicked();
  }

  handleThetaChange(e) {
    const theta = parseFloat(e.target.value);
    this.props.onThetaChanged(theta);
    this.setState({ theta });
  }

  render() {
    return (
      <div className={this.props.className}>
        <fieldset>
          <legend>Settings</legend>
          <DropdownList className='grid-options'
                        values={this.props.gridSizeOptions}
                        label='Grid Size:'
                        selected={this.state.gridSize}
                        disabled={this.props.isRunning}
                        onChange={this.handleGridSizeChange}
          />

          <TextInput label='End States:'
                    defaultValue={this.endStates}
                    className='txt-input'
                    keyboardType='numeric'
                    disabled={this.props.isRunning}
                    onChange={this.handleEndStatesChange} />

          <TextInput label='Theta:'
                    defaultValue={this.state.theta}
                    className='txt-input'
                    keyboardType='numeric'
                    disabled={this.props.isRunning}
                    onChange={this.handleThetaChange} />

          <SimpleButton className='button'
                        text='Next Step'
                        disabled={this.props.isRunning}
                        onClick={this.handleNextButtonClick} />

          <SimpleButton className='button'
                        text={this.props.isRunning ? 'Stop' : 'Run'}
                        onClick={this.handleRunButtonClick} />

          <SimpleButton className='button'
                        text='Reset'
                        onClick={this.handleResetButtonClick} />
        </fieldset>
      </div>
    );
  }
}
