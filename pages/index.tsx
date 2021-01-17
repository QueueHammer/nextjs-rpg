import _ from 'lodash';
import TerrainLayer from '../components/TerrainLayer';
import EntityLayer from '../components/EntityLayer';
import { useState } from 'React';
import GameBoard from '../components/GameBoard';
import IDimensions from '../src/interfaces/dimensions';
import Terrain from '../src/terrain';


const width = 64;
const height = width;

const terrain = Terrain(width, height);

const entities = [];
  const dimensions: IDimensions = {
    width,
    height,
    resolution: 16,
    units: 'px'
  }

export default function Index() {

  return <GameBoard
    dimensions={dimensions}
    terrain={terrain}
    entities={entities}
  />
}
