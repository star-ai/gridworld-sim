import React from 'react';

export function Cell(props) {
  return <div className="cell">{props.value}</div>;
}

export const DirectionsBlock = props => {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        // arrowhead marker definition
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>

      // left
      <line visibility={props.visibility[0]} x1="3" y1="30" x2="30" y2="30" stroke="black" markerStart="url(#arrow)" />
      // top
      <line visibility={props.visibility[1]} x1="30" y1="30" x2="30" y2="3" stroke="black" markerEnd="url(#arrow)" />
      // bottom
      <line visibility={props.visibility[2]} x1="30" y1="30" x2="30" y2="57" stroke="black" markerEnd="url(#arrow)" />
      // right
      <line visibility={props.visibility[3]} x1="30" y1="30" x2="57" y2="30" stroke="black" markerEnd="url(#arrow)" />
    </svg>
  )
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
