import React from 'react';
import T from 'prop-types';
import { Cell } from '../styles';

export const UrlButton = props => (
  <button href="#" onClick={props.onClick} disabled={props.disabled}>
    <div>{props.text}</div>
  </button>
);
UrlButton.propTypes = {
  onClick: T.func.isRequired,
  text: T.string,
  disabled: T.bool,
};
UrlButton.defaultProps = {
  text: 'Button',
  disabled: false,
};

// TODO: convert it to button
export const CellButton = ({ value }) => (
  <Cell>{value}</Cell>
);
Cell.propTypes = {
  value: T.objectOf(T.any).isRequired,
};
