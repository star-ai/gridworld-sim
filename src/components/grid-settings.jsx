import React from 'react';

import { DropdownList, SimpleButton, TextInput } from './controls';

function handleValueChange(e) {
  console.log('Value set to', e.target.value);
}

export default function GridSettings(props) {
  return (
    <div className={props.className}>
      <DropdownList 
        className='grid-options'
        values={props.gridSizeOptions}
        label='Grid Options'
      />

      <TextInput label='End States:' value={props.endStates} className='input' />

      <SimpleButton className='button' text='Next Step' />

      <SimpleButton className='button' text='Run' />
    </div>
  );
}
