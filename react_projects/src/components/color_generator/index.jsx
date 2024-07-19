import { useEffect, useState } from 'react';

export default function RandomColorGenerator() {
  const [colorMode, setColorMode] = useState('hex');
  const [color, setColor] = useState('#000000');

  function numGenerator(length) {
    return Math.floor(Math.random() * length);
  }

  function generateRandomHexColor() {
    const hexUnits = '0123456789ABCDEF';
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hexUnits[numGenerator(hexUnits.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function generateRandomRgbColor() {
    const red = numGenerator(256);
    const green = numGenerator(256);
    const blue = numGenerator(256);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    console.log(rgbColor);
    setColor(rgbColor);
  }

  useEffect(() => {
    if (colorMode === 'hex') {
      generateRandomHexColor();
    } else {
      generateRandomRgbColor();
    }
  }, [colorMode]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color,
      }}
    >
      <button onClick={() => setColorMode('hex')}>HEX Color</button>
      <button onClick={() => setColorMode('rgb')}>RGB Color</button>
      <button
        onClick={
          colorMode === 'hex' ? generateRandomHexColor : generateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '60px',
          marginTop: '50px',
        }}
      >
        <h3>{colorMode === 'hex' ? 'HEX Color' : 'RGB Color'}</h3>
        <h2 style={{ marginTop: '20px' }}>{color}</h2>
      </div>
    </div>
  );
}
