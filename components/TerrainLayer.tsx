import IDimensions from '../src/interfaces/dimensions';
import Tile from './Tile';

export default function TerrainLayer({terrain, dimensions}: ITerrainConfig) {
  const { width, height, resolution, units } = dimensions;
  return <div
    className="terrain-layer"
    style={{
      gridTemplateColumns: `repeat(${width}, ${resolution}${units})`,
      gridTemplateRows: `repeat(${height}, ${resolution}${units})`,
    }}>
    {(terrain || []).map((t, i) => <Tile key={i} layers={t.layers} />)}
  </div>;
}

interface ITerrainConfig {
  terrain: any,
  dimensions: IDimensions 
}
