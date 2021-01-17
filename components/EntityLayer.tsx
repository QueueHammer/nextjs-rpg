import { useState, useEffect, Component } from 'react';
import IDimensions from '../src/interfaces/dimensions';
import useKeyPress from '../src/use-key-press';
import Entity from './Entity';

export default function EntityLayer({entities, dimensions}: IProps) {
  const { width, height, resolution, units } = dimensions;

  return <div className="entity-layer">
    {entities.map((E, i) => <E key={i} dimensions={dimensions}/>)}
  </div>;
}

interface IProps {
  entities: any;
  dimensions: IDimensions;
}
