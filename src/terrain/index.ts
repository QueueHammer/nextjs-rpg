import { range, sampleSize, inRange } from 'lodash';
import IPosition from '../interfaces/position';

const grass = 'grass';
const dryGrass = 'grass dry';
const rock = 'rock';

export default function Terrain(width: number, height: number) {
  const baseTile: any = {
  };
  const terrain = range(width * height).map(tileGenerator);
  sampleSize(terrain, terrain.length * 0.05)
    .forEach((tile: ITile) => {
      tile.layers.push(rock);
      tile.solid = true;
    });

  terrain.canMove = ({x, y}: IPosition) =>
    inRange(x, width) &&
    inRange(y, height) &&
    terrain[(y * width) + x].canMoveInto;

  return terrain;

  function tileGenerator(): ITile {
    const isGrass = Math.random() < 0.77;
    return {
      layers: [isGrass ? grass : dryGrass],
      occupied: false,
      solid: false,
      get canMoveInto() { return !(this.occupied || this.solid); }
    };
  }
}

export interface ITile {
  layers: string[];
  solid: boolean;
  occupied: boolean;
  readonly canMoveInto: boolean;
}
