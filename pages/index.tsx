import _ from 'lodash';
import Slime from '../components/entities/Slime';
import GameBoard from '../components/GameBoard';
import Player from '../components/entities/Player';
import IDimensions from '../src/interfaces/dimensions';
import Terrain from '../src/terrain';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';
import Vector from '../src/Vector';
const now = Math.floor(Date.now() /1000);



const width = 64;
const height = width;

const terrain = Terrain(width, height);
const tickService = interval(2500).pipe(
  take(10),
  map(i => i + now)
);

const entities = [
  (props) => Player({terrain, ... props }),
].concat(_.range(1)
  .map($ => (new Vector(_.random(width), _.random(height))))
  .map(startPos =>
    (props) => Slime({terrain, startPos, tickService, ... props })
));
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
