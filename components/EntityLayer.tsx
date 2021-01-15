import { useState, useEffect } from 'react';
import IDimensions from '../src/interfaces/dimensions';
import useKeyPress from '../src/use-key-press';
import Entity from './Entity';

export default function EntityLayer({entities, dimensions}: IProps) {
  const { width, height, resolution, units } = dimensions;
  const [playerPosition, setPlayerPosition] = useState({x: 0, y: 0});
  const sideLength = 32;
  const grass = {summer: true, grass: true};

  useKeyPress((e: KeyboardEvent) => {
    const key = e.key.replace(/arrow/i, '').toLowerCase();
    const newPosition = { ... playerPosition };

    e.preventDefault();

    switch (key) {
      case 'd':
      case 'right':
        newPosition.x++;
        break;
      case 'a':
      case 'left':
        newPosition.x--;
        break;
      case 'w':
      case 'up':
        newPosition.y--;
        break;
      case 's':
      case 'down':
        newPosition.y++;
        break;
      case 'q':
        console.log(key);
      case 'down':
        console.log(key);
        break;
      default:
        console.log(key);
    }
    setPlayerPosition(newPosition);
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
