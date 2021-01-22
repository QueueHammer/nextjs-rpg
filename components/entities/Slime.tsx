import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import IDimensions from '../../src/interfaces/dimensions';
import IPosition, { IPartial } from '../../src/interfaces/position';
import Vector, { iVector } from '../../src/Vector';
import Direction from '../../src/terrain/direction';
import Entity from './Entity';

const classNames = ['slime'].join(' ');

export default function Slime({dimensions, terrain, startPos, tickService}: IProps) {
  const [position, setPosition] = useState(startPos);
  const [isMoving, setIsMoving] = useState<boolean>();
  const [direction, setDirection] = useState<string>();

  useEffect(() => {
    const sub = tickService.subscribe(updatePosition);
    return () => sub.unsubscribe();
  }, [position.x, position.y]);

  return <Entity
    offset={position}
    classNames={isMoving ?
      classNames + ' moving ' + direction :
      classNames}
    dimensions={dimensions}
  />;

  function updatePosition() {
    const moves = Direction.asList();
    let cantMove = true;
    let nPos: Vector;
    let move: Vector;
    let index: number;

    while(moves.length > 0 && cantMove) {
      index = _.random(moves.length);
      const move = moves[index];
      nPos = position.add(move);

      cantMove = !terrain.canMove(nPos);
      if(cantMove) {
        console.log('Failed to move', move, position);
        moves.splice(index, 1);
      }
    }

    if(cantMove) { return; };
    setPosition(nPos);
    setIsMoving(true);
    setDirection(Direction.getDirection(move));
    setTimeout(() => {
      setIsMoving(false);
    }, 1000);
  }
}

interface IProps {
  terrain: any;
  dimensions: IDimensions;
  tickService: Observable<number>;
  startPos: Vector;
}

interface IDirection extends IPartial {
  direction: 'east' | 'south' | 'west' | 'north';
}
