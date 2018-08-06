import React from 'react';
import BoardSettings from './containers/BoardSettings';
import './app.css';

function render() {
  const title = 'Gridworld Simulator';

  return (
    <div>
      <h1>{title}</h1>
        <BoardSettings />
    </div>
  );
}

export default render;
