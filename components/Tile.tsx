import  getClasses  from '../src/get-classes';

export default function Tile({layers}: IProps) {
  return <div className="tile">
    {(layers || []).map((layer, i ) =>
      <div key={i} className={layer} />
    )}
  </div>;
}

export interface IProps {
  layers: string[]
}
