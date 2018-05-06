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

function Board() {
  const grid = initialiseGrid(4, 4);

  return <div className="board">{buildRows(grid)}</div>;
}

export default Board;
