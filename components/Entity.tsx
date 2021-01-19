export default function Entity({offset, dimensions, classNames}) {
  const { units, resolution } = dimensions;
  const styles = {
    left: `${offset.x * resolution}${units}`,
    top: `${offset.y * resolution}${units}`,
  };

  return <div className={classNames}
    style={styles}
  />;
}

export interface Props {
  offset: {
    x: number, //px
    y: number //px
  },
  classNames: string[];
}
