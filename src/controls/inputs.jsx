import React from 'react';
import T from 'prop-types';
import { Label, Input } from '../styles';

const InputBase = props => (
  <div>
    <Label>{props.label}</Label>
    <Input
      type={props.inputType}
      // defaultValue={props.value}
      onBlur={props.onChange}
      // disabled={props.disabled}
      // placeholder={props.placeholder}
      // width={props.width}
      {...props}
    />
  </div>
);
InputBase.propTypes = {
  inputType: T.string.isRequired,
  onChange: T.func.isRequired,
  label: T.string,
  value: T.string,
  disabled: T.bool,
  placeholder: T.string,
  width: T.number,
};
InputBase.defaultProps = {
  label: '',
  value: '',
  disabled: false,
  placeholder: '',
  width: null,
};

export const TextInput = props => (
  <InputBase inputType="text" {...props} />
);

export const NumericInput = props => (
  <InputBase inputType="number" {...props} />
);
