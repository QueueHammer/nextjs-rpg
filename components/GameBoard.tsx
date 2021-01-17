import _ from 'lodash';
import TerrainLayer from '../components/TerrainLayer';
import EntityLayer from '../components/EntityLayer';
import IDimensions from '../src/interfaces/dimensions';

export default function GameBoard({dimensions, entities, terrain}: IBoardConfig) {
  return <div style={{transform: 'scale(1)'}}>
    <TerrainLayer
      terrain={terrain}
      dimensions={dimensions}
    />
    <EntityLayer 
      entities={entities}
      dimensions={dimensions}
    />
  </div>;
}

export interface IBoardConfig {
  dimensions: IDimensions,
  entities: any,
  terrain: any
}
