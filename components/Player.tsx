import { useState, useEffect } from 'react';
import IDimensions from '../src/interfaces/dimensions';
import PlayerKeyMap, { ActionTypes } from '../src/player-key-map';
import useKeyPress from '../src/use-key-press';
import Entity from './Entity';

export default function Player({}: IProps) {
  // const { width, height, resolution, units } = dimensions;
  const [playerPosition, setPlayerPosition] = useState({x: 0, y: 0});

  useKeyPress((e: KeyboardEvent) => {
    const key = e.key.replace(/arrow/i, '').toLowerCase();
    e.preventDefault();

    const action = PlayerKeyMap(e);
    if(action.type === ActionTypes.MOVE) {
      let move = action.payload;
      setPlayerPosition({
        ... playerPosition,
        ... (action.payload.x !== undefined ?
            { x: playerPosition.x + move.x }:
            { y: playerPosition.y + move.y }
        )
      });
    }
  });

  return <div
    className="entity-layer"
    style={{
      gridTemplateColumns: `repeat(${width}, ${resolution}${units})`,
      gridTemplateRows: `repeat(${height}, ${resolution}${units})`
    }}>
    <Entity offset={playerPosition} names={{farmer: true}} dimensions={dimensions}/>
  </div>;
}

interface IProps {
  entities: any;
  dimensions: IDimensions;
}
