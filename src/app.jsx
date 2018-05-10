import React from 'react';

import './app.css';
import Board from './components/board';
import GridSettings from './components/grid-settings';

function render() {
  const title = 'Gridworld Simulator';
  const settingsTitle = 'Settings';
  const gridSizeOptions = [
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
  const endStates = '1 15';

  return (
    <div>
      <h1>{title}</h1>
      <h2>{settingsTitle}</h2>
      <GridSettings 
        gridSizeOptions={gridSizeOptions}
        endStates={endStates}
        className='grid-settings'
      />
      <br />
      <Board />
    </div>
  );
}

export default render;
