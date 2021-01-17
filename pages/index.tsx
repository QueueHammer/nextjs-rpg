import _ from 'lodash';
import GameBoard from '../components/GameBoard';
import Player from '../components/Player';
import IDimensions from '../src/interfaces/dimensions';
import Terrain from '../src/terrain';


const width = 64;
const height = width;

const terrain = Terrain(width, height);

const entities = [(props) => Player({terrain, ... props })];
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
