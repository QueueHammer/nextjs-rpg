import getClasses from "../src/get-classes";
import _ from 'lodash';

export default function test() {
  const oneHundredPercent = '100%';
  const length = `32px`;
  return <div className="test" style={{
    width: oneHundredPercent,
    height: oneHundredPercent,
  }}>
    <div className={'entity-layer'} >
      {['south', 'west','east','north'].map((n, i) => <div key={i}
        className={['slime', 'moving'].concat([`${n}`]).join(' ')}
        style={{top: (i + 0) * 16}}  
      />)}
      
    </div>
    
  </div>
}