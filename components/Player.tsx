import { useState, useEffect } from 'react';
import IDimensions from '../src/interfaces/dimensions';
import PlayerKeyMap, { ActionTypes } from '../src/player-key-map';
import useKeyPress from '../src/use-key-press';
import Entity from './Entity';

export default function Player({dimensions, terrain}: IProps) {
  const [playerPosition, setPlayerPosition] = useState({x: 0, y: 0});
  const { width, height } = dimensions;

  useKeyPress((e: KeyboardEvent) => {
    e.preventDefault();

    const key = e.key.replace(/arrow/i, '').toLowerCase();
    const action = PlayerKeyMap(e);

    if(action.type !== ActionTypes.MOVE) { return; }

    const move = action.payload;
    const nPos = {
      ... playerPosition,
      ... (action.payload.x !== undefined ?
          { x: playerPosition.x + move.x }:
          { y: playerPosition.y + move.y }
      )
    };

    if(nPos.x < 0 || width <= nPos.x ) { return; }
    if(nPos.y < 0 || height <= nPos.y ) { return; }

    const totalOffset = (nPos.y * dimensions.width) + nPos.x;

    if(terrain[totalOffset].solid) { return; }

    setPlayerPosition(nPos);
  });

  return <Entity
    offset={playerPosition}
    names={{farmer: true, player: true}}
    dimensions={dimensions}
  />;
}

interface IProps {
  terrain: any;
  dimensions: IDimensions;
}
