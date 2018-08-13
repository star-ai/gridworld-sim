import React from 'react';
import T from 'prop-types';
import { DropdownList, TextInput } from '../controls';
import {
  Fieldset,
  Legend,
  BoardSettingsElement,
} from '../styles';
import {
  FunctionNames,
} from '../lib/solutions/constants';

const gridSizeOptions = ['4x4', '6x6', '10x10'];


const BoardSettings = ({
  gridSize, selectedFunction, theta, actions,
}) => (
  <Fieldset>
    <Legend>Settings</Legend>
      <BoardSettingsElement>
        <DropdownList
          label="Grid Size"
          onChange={actions.setGridSize}
          selectedValue={gridSize}
          items={gridSizeOptions}
        />
      </BoardSettingsElement>
        <BoardSettingsElement>
          <DropdownList
            label="Function"
            onChange={actions.setFunction}
            selectedValue={FunctionNames[selectedFunction]}
            items={Object.values(FunctionNames)}
          />
        </BoardSettingsElement>
          <BoardSettingsElement>
            <TextInput
              label="Theta"
              onChange={actions.setTheta}
              value={theta.toString()}
            />
          </BoardSettingsElement>
  </Fieldset>
);
BoardSettings.propTypes = {
  gridSize: T.string.isRequired,
  actions: T.objectOf(T.shape).isRequired,
  selectedFunction: T.string.isRequired,
  theta: T.string.isRequired,
};

export default BoardSettings;
