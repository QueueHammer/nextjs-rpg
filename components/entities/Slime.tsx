import { random } from 'lodash';
import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import IDimensions from '../../src/interfaces/dimensions';
import Vector, { iVector } from '../../src/Vector';
import Direction from '../../src/terrain/direction';
import Entity from './Entity';

const baseClass = 'slime';

export default function Slime({dimensions, terrain, startPos, tickService}: IProps) {
  const [position, setPosition] = useState(startPos);
  const [isMoving, setIsMoving] = useState<boolean>();
  const [direction, setDirection] = useState<string>(Direction.North.direction);

  useEffect(() => {
    const sub = tickService.subscribe(updatePosition);
    return () => sub.unsubscribe();
  }, [position.x, position.y]);

  const classes = baseClass + ' ' + direction +
    (isMoving? ' moving' : '')

  return <Entity
    offset={position}
    classNames={classes}
    dimensions={dimensions}
  />;

  function updatePosition() {
    const moves = Direction.asList();
    let cantMove = true;
    let nPos: Vector;
    let move: Direction;
    let index: number;

    while(moves.length > 0 && cantMove) {
      index = random(moves.length - 1);
      move = moves[index];
      nPos = position.add(move.vector);

      cantMove = !terrain.canMove(nPos);
      if(cantMove) {
        moves.splice(index, 1);
      }
    }

    if(cantMove) { return; };
    setPosition(nPos);
    setIsMoving(true);
    setDirection(move.direction);
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
