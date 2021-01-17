import { generateKeyPair } from "crypto";

export default function test() {
  const oneHundredPercent = '100%';
  const length = `32px`;
  return <div className="test" style={{
    width: oneHundredPercent,
    height: oneHundredPercent,
    backgroundColor: 'grey'
  }}>
    <div>something</div>
    <div>something</div>
    <div>something</div>
    <div>something</div>
    <div>
      <div style={{
        //position: 'absolute',
        transform: `scale(1)`,
        left: '50px',
        top: '36px',
        width: '32px',
        height: '32px',
      }}>
        <div style={{
          position: 'fixed',
          left: '50px',
          top: '36px',
          width: '32px',
          height: '32px',
        }}></div>
        <div style={{
          position: 'fixed',
          left: '50px',
          top: '36px',
          width: '32px',
          height: '32px',
        }}></div>
      </div>
    </div>
    
  </div>
}