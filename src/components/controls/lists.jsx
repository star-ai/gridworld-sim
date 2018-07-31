import React from 'react';
import T from 'prop-types';
import { Label, Select } from '../styles';

const DropdownList = props => {
  const children = [];
  props.items.forEach(item =>
    children.push(
      <option key={item} value={item}>
        {item}
      </option>,
    ));

  return (
    <div>
      <Label>{props.label}</Label>
      <Select
        value={props.selectedItem}
        onChange={props.onChange}
        disabled={props.disabled}
      >
        {children}
      </Select>
    </div>
  );
};
DropdownList.propTypes = {
  items: T.arrayOf(T.string).isRequired,
  // onChange: T.func.isRequired,
  selectedItem: T.string.isRequired,
  label: T.string,
  disabled: T.bool,
};
DropdownList.defaultProps = {
  label: '',
  disabled: false,
};

export default DropdownList;
