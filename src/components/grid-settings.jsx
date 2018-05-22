import React, { Component } from 'react';

import { DropdownList, SimpleButton, TextInput } from './controls';
import { isNullOrUndefined } from 'util';

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
      running: false,
    };

    this.handleGridSizeChange = this.handleGridSizeChange.bind(this);
    this.handleEndStatesChange = this.handleEndStatesChange.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handleRunButtonClick = this.handleRunButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.handleThetaChange = this.handleThetaChange.bind(this);
  }

  handleNextButtonClick(e) {
    if (this.state.running) {
      e.preventDefault();
      return;
    }
    this.props.onNextButtonClicked(e);
  }

  handleRunButtonClick(e) {
    if (!this.state.running) {
      this.props.onRunButtonClicked(e);
    } else {
      this.props.onStopButtonClicked(e);
    }
    this.setState({ running: !this.state.running });
  }

  handleGridSizeChange(e) {
    if (this.state.running) {
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
    if (this.state.running) {
      e.preventDefault();
      return;
    }
    this.setState({ running: false });
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
        <DropdownList className='grid-options'
                      values={this.props.gridSizeOptions}
                      label='Grid Size:'
                      selected={this.state.gridSize}
                      disabled={this.state.running}
                      onChange={this.handleGridSizeChange}
        />

        <TextInput label='End States:'
                   defaultValue={this.endStates}
                   className='txt-input'
                   keyboardType='numeric'
                   disabled={this.state.running}
                   onChange={this.handleEndStatesChange} />

        <TextInput label='Theta:'
                   defaultValue={this.state.theta}
                   className='txt-input'
                   keyboardType='numeric'
                   disabled={this.state.running}
                   onChange={this.handleThetaChange} />

        <SimpleButton className='button'
                      text='Next Step'
                      disabled={this.state.running}
                      onClick={this.handleNextButtonClick} />

        <SimpleButton className='button'
                      text={this.state.running ? 'Stop' : 'Run'}
                      onClick={this.handleRunButtonClick} />

        <SimpleButton className='button'
                      text='Reset'
                      onClick={this.handleResetButtonClick} />
      </div>
    );
  }
}
