import React from 'react';
import T from 'prop-types';
import { DropdownList } from '../controls';
import {
  Fieldset,
  Legend,
  BoardSettingsElement,
} from '../styles';
import {
  FunctionNames,
} from '../lib/solutions/constants';

const gridSizeOptions = ['4x4', '6x6', '10x10'];


const BoardSettings = ({ gridSize, selectedFunction, actions }) => (
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
  </Fieldset>
);
BoardSettings.propTypes = {
  gridSize: T.string.isRequired,
  actions: T.objectOf(T.shape).isRequired,
  selectedFunction: T.string.isRequired,
};

export default BoardSettings;
