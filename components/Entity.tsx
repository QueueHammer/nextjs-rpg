import  getClasses  from '../src/get-classes';

export default function Entity({offset, dimensions, names}) {
  const { units, resolution } = dimensions;
  return <div className={getClasses(names)}
    style={{
      left: `${offset.x * resolution}${units}`,
      top: `${offset.y * resolution}${units}`,
      transition: '0.2s cubic-bezier(0.37, 0, 0.63, 1)',
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
