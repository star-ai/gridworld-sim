import React from 'react';

export function Cell(props) {
  return <div className="cell">{props.value}</div>;
}

export function DropdownList(props) {
  const items = [];
  props.values.forEach((item) => 
    items.push(
      <option key={item.value} value={item.value}>{item.label}</option>));
  return (
    <div className={props.className}>
      <label>{props.label}
        <select value={props.selected}
                onChange={props.onChange}
                disabled={props.disabled}>
          {items}
        </select>
      </label>
    </div>
  );
}

export function TextInput(props) {
  return (
    <div className={props.className}>
      <label>{props.label}
        <input
          type={props.keyboardType}
          defaultValue={props.defaultValue}
          onKeyUp={props.onChange}
          disabled={props.disabled}
        />
      </label>
    </div>
  )
}

export function SimpleButton(props) {
  return (
    <div className={props.className}>
      <a href="#" onClick={props.onClick} disabled={props.disabled}>
        <div>{props.text}</div>
      </a>
    </div>
  )
}
