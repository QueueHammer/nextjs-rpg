export default function Entity({offset, dimensions, classNames}) {
  const { units, resolution } = dimensions;

  return <div className={classNames}
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
  classNames: string[];
}
