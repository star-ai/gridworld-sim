import React from 'react';
import BoardSettings from './containers/BoardSettings';
import StateValueBoard from './containers/StateValueBoardContainer';
import ButtonsPanel from './containers/ButtonsPanelContainer';
import './app.css';

function render() {
  const title = 'Gridworld Simulator';

  return (
    <div>
      <h1>{title}</h1>
        <BoardSettings />
          <StateValueBoard />
            <ButtonsPanel />
    </div>
  );
}

export default render;
