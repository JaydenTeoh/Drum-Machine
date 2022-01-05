import './App.css';
import Pad from './Pad';
import React, { useState } from 'react';
import { audioClips } from './AudioClips';

function App() {
  const [volume, setVolume] = useState(1);
  const [description, setDescription] = useState('Play');
  const [power, setPower] = useState(false);


  function handlePower(props) {
    setPower(props => !props);
  }

  return (
    <div>
      <div id='drum-machine'>
        <div id='display'>
          <div id='buttons'>
            {audioClips.map(clip => (<Pad clip={clip} setDescription={setDescription} volume={volume} power={power} />))}
          </div>
          <div className='settings'>
            <h3 className='description'>{description}</h3>
            <h4>Volume</h4>
            <input
              type='range'
              step='0.01'
              onChange={(e) => setVolume(e.target.value)}
              value={volume}
              max='1'
              min='0'
              className='volume'
            />
            <h4>Power</h4>
            <label className='switch'>
              <input type='checkbox' onChange={handlePower} />
              <span className='slider'></span>
            </label>
          </div>

        </div>
      </div>
      <footer> Built By JaydenTeoh </footer>
    </div>
  );
}

export default App;
