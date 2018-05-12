import React, { Component } from 'react';

import Board from '../components/board';
import GridSettings from '../components/grid-settings';

import './grid.css';

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.settingsTitle = 'Settings';
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
      gridSize: '4x4',
      endStates: [0, 15],
    };

    this.handleGridSizeChange = this.handleGridSizeChange.bind(this);
    this.handleEndStateChange = this.handleEndStateChange.bind(this);
  }

  handleGridSizeChange(e) {
    this.setState({ gridSize: e.target.value });
    // TODO: add dialog to confirm grid reset.
  }

  handleEndStateChange(states) {
    console.log(states);
    this.setState({ endStates: states });
  }

  render() {
    return (
      <div>
        <h2>{this.settingsTitle}</h2>
        <GridSettings 
          gridSizeOptions={this.gridSizeOptions}
          endStates={this.state.endStates}
          className='grid-settings'
          selectedGridSize={this.state.gridSize}
          onGridSizeChanged={this.handleGridSizeChange}
          onEndStatesChanged={this.handleEndStateChange}
        />
        <br />
        <Board gridSize={this.state.gridSize}/>
      </div>
    )
  }
}