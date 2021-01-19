import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import IDimensions from '../../src/interfaces/dimensions';
import IPosition, { IPartial } from '../../src/interfaces/position';
import Entity from '../Entity';

const classNames = ['slime'].join(' ');
const directions = [
  'east',
  'north',
  'west',
  'south',
];

export default function Slime({dimensions, terrain, startPos, tickService, timeOfInit}: IProps) {
  const [position, setPosition] = useState(startPos);
  const [lastMove, setLastMove] = useState<IPosition>();
  const [isMoving, setIsMoving] = useState<boolean>();
  const [direction, setDirection] = useState<string>();

  useEffect(() => {
    const id = setInterval(() => {
      const moves: IPartial[] = [
        { x: 1 },
        { y: 1 },
        { x: -1 },
        { y: -1 },
      ];
      let cantMove = true;
      let nPos: IPosition;
      let move: any;
      let index: number;

      while(moves.length > 0 && cantMove) {
        index = _.random(moves.length - 1);
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
      setIsMoving(true);
      setDirection(directions[index]);
      setTimeout(() => {
        setIsMoving(false);
      }, 1000);
    }, 2500);
    return () => clearInterval(id);
  }, [position.x, position.y, isMoving, direction]);

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
