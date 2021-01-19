import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import IDimensions from '../../src/interfaces/dimensions';
import IPosition, { IPartial } from '../../src/interfaces/position';
import Entity from '../Entity';

const classNames = ['slime'].join(' ');

export default function Slime({dimensions, terrain, startPos, tickService, timeOfInit}: IProps) {
  const [position, setPosition] = useState(startPos);
  const [isMoving, setIsMoving] = useState<boolean>();
  const [direction, setDirection] = useState<string>();

  useEffect(() => {
    const id = setInterval(() => {
      const moves: IDirection[] = [
        { x: 1, direction: 'east' },
        { y: 1, direction: 'south' },
        { x: -1, direction: 'west' },
        { y: -1, direction: 'north' },
      ];
      let cantMove = true;
      let nPos: IPosition;
      let move: any;
      let index: number;

      while(moves.length > 0 && cantMove) {
        index = _.random(moves.length - 1);
        move = moves[index];
        const newMove = move.x !== undefined ?
            { x: position.x + move.x }:
            { y: position.y + move.y };
        nPos = {
          ... position,
          ... newMove
        };

        cantMove = !terrain.canMove(nPos);
        if(cantMove) {
          console.log('Failed to move', move, position);
          moves.splice(index, 1);
        }
      }

      if(cantMove) { return; };
      const delta = {
        x: Math.abs(nPos.x  - position.x),
        y: Math.abs(nPos.y  - position.y)
      };
      if(delta.x > 1 || delta.y > 1 || (delta.x + delta.y) > 1) {
        console.log('error');
      }
      setPosition(nPos);
      setIsMoving(true);
      setDirection(move.direction);
      setTimeout(() => {
        setIsMoving(false);
      }, 1000);
    }, 2500);
    return () => clearInterval(id);
  }, [position.x, position.y]);

  return <Entity
    offset={position}
    classNames={isMoving ?
      classNames + ' moving ' + direction :
      classNames}
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

interface IDirection extends IPartial {
  direction: 'east' | 'south' | 'west' | 'north';
}
