import getClasses from "../src/get-classes";
import _ from 'lodash';

export default function test() {
  const oneHundredPercent = '100%';
  const length = `32px`;
  return <div className="test" style={{
    width: oneHundredPercent,
    height: oneHundredPercent,
  }}>
    <div className={'entity-layer'} style={{transform: 'scale(2)'}}>
      <div className={['slime', 'moving', 'south'].join(' ')} />
      {['south', 'west','east','north'].map((n, i) => <div key={i}
        className={['slime', 'moving'].concat([`${n}`]).join(' ')}
        style={{top: (i + 1) * 16}}  
      />)}
      
    </div>
    
  </div>
}