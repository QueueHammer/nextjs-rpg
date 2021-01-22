import { useState, useEffect, useMemo } from 'react';
import IDimensions from '../../src/interfaces/dimensions';
import PlayerKeyMap, { ActionTypes } from '../../src/player-key-map';
import useKeyPress from '../../src/use-key-press';
import Entity from './Entity';

const classNames = [
  'farmer',
  'player'
].join(' ');

export default function Player({dimensions, terrain}: IProps) {
  const [position, setPosition] = useState({x: 0, y: 0});
  const { width, height } = dimensions;

  useKeyPress((e: KeyboardEvent) => {
    e.preventDefault();

    const key = e.key.replace(/arrow/i, '').toLowerCase();
    const action = PlayerKeyMap(e);

    if(action.type !== ActionTypes.MOVE) { return; }

    const move = action.payload;
    const nPos = {
      ... position,
      ... (action.payload.x !== undefined ?
          { x: position.x + move.x }:
          { y: position.y + move.y }
      )
    };

    if(!terrain.canMove(nPos)) { return; }

    setPosition(nPos);
  });

  return useMemo(() => <Entity
    offset={position}
    classNames={classNames}
    dimensions={dimensions}
  />, [position.x, position.y, classNames]);
}

interface IProps {
  terrain: any;
  dimensions: IDimensions;
}
