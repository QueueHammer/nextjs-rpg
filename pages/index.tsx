import _ from 'lodash';
import TerrainLayer from '../components/TerrainLayer';
import EntityLayer from '../components/EntityLayer';
import { useState } from 'React';
import GameBoard from '../components/GameBoard';
import IDimensions from '../src/interfaces/dimensions';


const width = 64;
const height = width;

const baseTile = {
  tile: true,
  ground: true,
};
const grass = { grass: true, };
const dryGrass = { 'dry-grass': true, };

const terrain = _.range(width * height).map($ => ({
  ... baseTile,
  ... (Math.random() < 0.80 ? grass : dryGrass)
}));
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
