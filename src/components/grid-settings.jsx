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

    this.handleGridSizeChange = this.handleGridSizeChange.bind(this);
    this.handleEndStatesChange = this.handleEndStatesChange.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handleRunButtonClick = this.handleRunButtonClick.bind(this);
  }

  handleNextButtonClick(e) {
    console.log(e);
  }

  handleRunButtonClick(e) {
    console.log(e);
  }

  handleGridSizeChange(e) {
    this.props.onGridSizeChanged(e);
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

  render() {
    return (
      <div className={this.props.className}>
        <DropdownList 
          className='grid-options'
          values={this.props.gridSizeOptions}
          label='Grid Options'
          selected={this.props.selectedGridSize}
          onChange={this.handleGridSizeChange}
        />

        <TextInput label='End States:'
                   defaultValue={this.endStates}
                   className='input'
                   keyboardType='numeric'
                   onChange={this.handleEndStatesChange} />

        <SimpleButton className='button'
                      text='Next Step'
                      onClick={this.handleNextButtonClick} />

        <SimpleButton className='button'
                      text='Run'
                      onClick={this.handleRunButtonClick} />
      </div>
    );
  }
}
