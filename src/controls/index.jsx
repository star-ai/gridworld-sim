import React from 'react';
import T from 'prop-types';
import { Select, Label, Input } from '../styles';

export const DropdownList = props => {
  const {
    items, onChange, label, selectedValue, disabled,
  } = props;
  const children = items.map(i => <option key={i} value={i}>{i}</option>);
  return (
    <div>
      <Label>{label}</Label>
        <Select
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          {children}
        </Select>
    </div>
  );
};
DropdownList.propTypes = {
  items: T.arrayOf(T.string).isRequired,
  onChange: T.func.isRequired,
  label: T.string.isRequired,
  selectedValue: T.string,
  disabled: T.bool,
};
DropdownList.defaultProps = {
  selectedValue: null,
  disabled: false,
};

export const TextInput = props => (
  <div>
    <Label>{props.label}</Label>
      <Input
        type="text"
        onChange={(e) => props.onChange(e.target.value)}
        disabled={props.disabled}
        placeholder={props.placeholder}
        value={props.value}
      />
  </div>
);
TextInput.propTypes = {
  onChange: T.func.isRequired,
  value: T.string.isRequired,
  disabled: T.bool,
  placeholder: T.string,
  label: T.string,
};
TextInput.defaultProps = {
  disabled: false,
  placeholder: undefined,
  label: '',
};
