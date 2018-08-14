import React from 'react';
import T from 'prop-types';
import { Button } from '../controls';
import { BoardSettingsElement, Pannel } from '../styles';

const ButtonsPanel = ({
  isRunning,
  onNextClicked,
  onStartStopClicked,
  onResetClicked,
}) => {
  const startButtonText = isRunning ? 'Stop' : 'Start';

  return (
    <Pannel>
      <BoardSettingsElement>
        <Button
          text="Next"
          onClick={onNextClicked}
        />
      </BoardSettingsElement>
        <BoardSettingsElement>
          <Button
            text={startButtonText}
            onClick={onStartStopClicked}
          />
        </BoardSettingsElement>
          <BoardSettingsElement>
            <Button
              text="Reset"
              onClick={onResetClicked}
            />
          </BoardSettingsElement>
    </Pannel>
  );
};
ButtonsPanel.propTypes = {
  isRunning: T.bool.isRequired,
  onNextClicked: T.func.isRequired,
  onStartStopClicked: T.func.isRequired,
  onResetClicked: T.func.isRequired,
};

export default ButtonsPanel;
