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
      <label>{props.label}</label>
      <select value={props.selected} onChange={props.onChange}>
        {items}
      </select>
    </div>
  );
}

export function TextInput(props) {
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <input
        type={props.keyboardType}
        defaultValue={props.defaultValue}
        onKeyUp={props.onChange}
      />
    </div>
  )
}

export function SimpleButton(props) {
  return (
    <div className={props.className}>
      <a href="#" onClick={props.onClick}>
        <div>{props.text}</div>
      </a>
    </div>
  )
}
