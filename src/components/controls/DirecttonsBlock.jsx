import React from 'react';
import T from 'prop-types';

const DirectionsBlock = ({ visibility }) => (
  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <defs>
        (// arrowhead marker definition)
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="5"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" />
      </marker>
    </defs>
      (// left)
    <line
      visibility={visibility[0]}
      x1="3"
      y1="30"
      x2="30"
      y2="30"
      stroke="black"
      markerStart="url(#arrow)"
    />
      (// top)
    <line
      visibility={visibility[1]}
      x1="30"
      y1="30"
      x2="30"
      y2="3"
      stroke="black"
      markerEnd="url(#arrow)"
    />
      (// bottom)
    <line
      visibility={visibility[2]}
      x1="30"
      y1="30"
      x2="30"
      y2="57"
      stroke="black"
      markerEnd="url(#arrow)"
    />
      (// right)
    <line
      visibility={visibility[3]}
      x1="30"
      y1="30"
      x2="57"
      y2="30"
      stroke="black"
      markerEnd="url(#arrow)"
    />
  </svg>
);
DirectionsBlock.propTypes = {
  visibility: T.arrayOf(T.number).isRequired,
};

export default DirectionsBlock;
