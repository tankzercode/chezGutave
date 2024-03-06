import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

export const Prix = () => {
  const [range, setRange] = useState([0, 100]);

  const handleRangeChange = value => {
    setRange(value);
  };

  return (
    <div style={{ width: '400px', margin: '50px auto' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>Min Value: {range[0]}</label>
        <Slider style={{ flex: 1 }} min={0} max={100} range value={range} onChange={handleRangeChange} />
        <label style={{ marginLeft: '10px' }}>Max Value: {range[1]}</label>
      </div>
    </div>
  );
};

ReactDOM.render(<Prix />, document.getElementById('root'));
