import React from 'react';

import './app.css';
import Board from './components/board';

function render() {
  const title = 'Gridworld Simulator';

  return (
    <div>
      <h1>{title}</h1>
      <Board />
    </div>
  );
}

export default render;
