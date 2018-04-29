import React from 'react';

import Cell from './cell';

function render() {
  const rowsNumber = 4;
  const columnsNumber = 4;

  const rows = [];
  for (let i = 0; i < rowsNumber; i++) {
    const cols = [];
    for (let j = 0; j < columnsNumber; j++) {
      cols.push(<Cell />);
    }
    rows.push(<div className="row">{cols}</div>);
  }
  return <div className="board">{rows}</div>;
}

export default render;
