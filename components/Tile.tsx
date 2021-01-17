import  getClasses  from '../src/get-classes';

export default function Tile({layers}) {
  return <div className="tile">
    {(layers || []).map((layer, i ) =>
      <div key={i} className={getClasses(layer)} />
    )}
  </div>;
}
