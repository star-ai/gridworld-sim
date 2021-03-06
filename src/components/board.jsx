import React from 'react';

import { Cell } from './controls';

function buildRows(grid) {
  const rows = [];
  for (const [i, row] of grid.entries()) {
    const cols = [];
    const rowKey = `row${i}`;
    for (const [j, value] of row.entries()) {
      const columnKey = `${rowKey}col${j}`;
      cols.push(<Cell key={columnKey} value={value} />);
    }
    rows.push(<div key={rowKey} className="row">{cols}</div>);
  }

  return rows;
}

function initialiseGrid(rowsNumber, columnsNumber) {
  const grid = [];
  for (let i = 0; i < rowsNumber; i++) {
    const row = [];
    for (let j = 0; j < columnsNumber; j++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
}

function round(value, precision = 0) {
  const shift = function (value, precision) {
    const numArray = ("" + value).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision)
                                              : precision));
  }
  return shift(Math.round(shift(value, +precision)), -precision);
}

function buildGridFromValues(gridSize, values) {
  const grid = [];
  for (let i = 0; i < gridSize[0]; i++) {
    const row = [];
    for (let j = 0; j < gridSize[1]; j++) {
      const index = i * gridSize[0] + j;
      row.push(round(values[index], 2));
    }
    grid.push(row);
  }
  return grid;
}

export default function Board(props) {
  const gridSize = props.gridSize || [4, 4];
  let grid = [];
  if (props.gridValues.length === 0) {
    grid = initialiseGrid(...gridSize);
  } else {
    grid = buildGridFromValues(gridSize, props.gridValues);
  }

  return <div className="board">{buildRows(grid)}</div>;
}
