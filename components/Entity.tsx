import  getClasses  from '../src/get-classes';

export default function Entity({offset, dimensions, names}) {
  const { units, resolution } = dimensions;
  return <div className={getClasses(names)}
    style={{
      left: `${offset.x * resolution}${units}`,
      top: `${offset.y * resolution}${units}`,
    }}
  />;
}

export interface Props {
  offset: {
    x: number, //px
    y: number //px
  },
  names: {[key: string]: boolean};
}
