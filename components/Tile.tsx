import  getClasses  from '../src/get-classes';

export default function Tile({names}) {
  return <div className={getClasses({
    tile: true,
    ... names
  })} />;
}
