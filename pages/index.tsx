import _ from 'lodash';
import Slime from '../components/entities/Slime';
import GameBoard from '../components/GameBoard';
import Player from '../components/entities/Player';
import IDimensions from '../src/interfaces/dimensions';
import Terrain from '../src/terrain';

const width = 64;
const height = width;

const terrain = Terrain(width, height);

const entities = [
  (props) => Player({terrain, ... props }),
  (props) => Slime({terrain, startPos: {x: _.random(width), y: 0}, ... props })
];
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
