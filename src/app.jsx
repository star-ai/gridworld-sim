import React from 'react';

import Grid from './views/grid';

import './app.css';

function render() {
  const title = 'Gridworld Simulator';

  return (
    <div>
      <h1>{title}</h1>
      <h2>Policy Evaluation</h2>
      <Grid />
    </div>
  );
}

export default render;
