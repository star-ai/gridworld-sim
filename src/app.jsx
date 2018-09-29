import React from 'react';
import BoardSettings from './containers/BoardSettings';
import ButtonsPanel from './containers/ButtonsPanelContainer';
import './app.css';

function render() {
  const title = 'Gridworld Simulator';

  return (
    <div>
      <h1>{title}</h1>
        <BoardSettings />
          <ButtonsPanel />
    </div>
  );
}

export default render;
