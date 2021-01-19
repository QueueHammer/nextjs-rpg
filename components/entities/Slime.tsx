import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import IDimensions from '../../src/interfaces/dimensions';
import Entity from '../Entity';

export default function Slime({dimensions, terrain, startPos, tickService, timeOfInit}: IProps) {
  const [position, setPosition] = useState(startPos);
  const [lastMove, setLastMove] = useState<any>();

  useEffect(() => {
    const id = setInterval(() => {
      const moves = [
        { x: 1 },
        { y: 1 },
        { x: -1 },
        { y: -1 },
      ];
      let cantMove = true;
      let nPos: any;
      let move: any;

      // if(lastMove !== undefined) {
      //   moves.push(lastMove);
      //   moves.push(lastMove);
      // }

      while(moves.length > 0 && cantMove) {
        let index = _.random(moves.length - 1);
        console.log('picked', index, moves.length);
        move = moves[index];
        nPos = {
          ... position,
          ... (move.x !== undefined ?
            { x: position.x + move.x }:
            { y: position.y + move.y }
          )
        };

        cantMove = !terrain.canMove(nPos);
        if(cantMove) { moves.splice(index, 1); }
      }

      if(cantMove) { return; };
      setPosition(nPos);
      setLastMove(move);
      console.log('picked', move);
    }, 2000);
    return () => clearInterval(id);
  }, [position.x, position.y]);

  return <Entity
    offset={position}
    names={{ slime: true }}
    dimensions={dimensions}
  />;
}

interface IProps {
  terrain: any;
  dimensions: IDimensions;
  timeService: Observable<number>;
  startPos: { x: number, y: number };
  timeOfInit: string;
}
