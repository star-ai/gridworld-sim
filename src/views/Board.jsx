import React from 'react';
import T from 'prop-types';
import { Board as StyledBoard, Cell, SelectedCell } from '../styles';

const Board = ({
  values, boardSize, selectedValues, actions,
}) => {
  const [width, height] = boardSize.split('x').map(v => parseInt(v, 10));
  const initBoard = values.length === 0;
  const children = [];
  for (let i = 0; i < width; i++) {
    const row = [];
    for (let j = 0; j < height; j++) {
      const ind = (i * width) + j;
      const cellKey = `cell${ind}`;
      const CellElement =
        selectedValues.indexOf(ind) === -1 ? Cell : SelectedCell;
      row.push(
        <CellElement
          key={cellKey}
          value={ind}
          onClick={e =>
            actions.updateEndStates(
              parseInt(e.target.getAttribute('value'), 10),
            )
          }
        >
          {initBoard ? 0 : values[ind]}
        </CellElement>,
      );
    }
    const rowKey = `row${i + 1}`;
    children.push(<div key={rowKey}>{row}</div>);
  }
  return <StyledBoard>{children}</StyledBoard>;
};
Board.propTypes = {
  values: T.arrayOf(T.number).isRequired,
  boardSize: T.string.isRequired,
  selectedValues: T.arrayOf(T.number).isRequired,
  actions: T.objectOf(T.shape).isRequired,
};

export default Board;
