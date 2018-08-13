import React from 'react';
import BoardSettings from './containers/BoardSettings';
import Board from './containers/BoardContainer';
import './app.css';

function render() {
  const title = 'Gridworld Simulator';

  return (
    <div>
      <h1>{title}</h1>
        <BoardSettings />
          <h2>Grids</h2>
            <Board />
    </div>
  );
}

export default render;
