import _ from 'lodash';

export default function Terrain(width: number, height: number) {
  const baseTile: any = {
  };
  const grass = { grass: true, };
  const dryGrass = { grass: true, dry: true};
  const terrain = _.range(width * height).map(tileGenerator);
  const length = terrain.length;

  _.range(length * 0.15).forEach($ => {
    const index = Math.floor(Math.random() * length);
    const cell = terrain[index];
    cell.layers.push({
      rock: true
    });
    cell.solid = true;
    console.log(cell);
  });

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
