import React from 'react';
import { Fieldset, Legend, InlineBlock } from '../components/styles';
import DropdownList from '../components/controls/lists';
import { TextInput, NumericInput } from '../components/controls/inputs';

const GridSettingsView = () => {
  const items = ['4x4', '6x6', '10x10'];
  const selectedItem = items[0];

  return (
    <Fieldset>
      <Legend>Settings</Legend>
      <InlineBlock>
        <DropdownList
          label="Grid Size:"
          items={items}
          selectedItem={selectedItem}
          onChange={() => console.log('Item changed')}
        />
      </InlineBlock>
      <InlineBlock>
        <TextInput
          label="End States:"
          value="0 15"
          onChange={() => console.log('States changed')}
        />
      </InlineBlock>
      <InlineBlock>
        <NumericInput
          label="Theta:"
          value="0.00001"
          onChange={(...args) => console.log('States changed', args)}
        />
      </InlineBlock>
    </Fieldset>
  );
};

export default GridSettingsView;
