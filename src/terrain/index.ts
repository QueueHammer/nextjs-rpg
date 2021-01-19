import { range } from 'lodash';
import IPosition from '../interfaces/position';

export default function Terrain(width: number, height: number) {
  const baseTile: any = {
  };
  const grass = { grass: true, };
  const dryGrass = { grass: true, dry: true};
  const terrain = range(width * height).map(tileGenerator);
  const length = terrain.length;

  range(length * 0.05).forEach($ => {
    const index = Math.floor(Math.random() * length);
    const cell = terrain[index];
    cell.layers.push({
      rock: true
    });
    cell.solid = true;
  });

  terrain.canMove = ({x, y}: IPosition) => {
    if(x < 0 || width <= x ) { return false; }
    if(y < 0 || height <= y ) { return false; }

    const offset = (y * width) + x;
    const cell = terrain[offset];

    if(!cell) { return false; }

    return !(cell.solid || cell.filled); 
  }

  return terrain;

  function tileGenerator() {
      const seed = Math.random();
      const tile = {
        ... baseTile,
        grass: true
      };
      const tiles = { layers: [tile] };
      
      if(seed > 0.77) { tile.dry = true }
      return tiles
  }
}
