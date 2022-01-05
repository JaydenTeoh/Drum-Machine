import React, {useEffect} from 'react';

function Pad({clip, setDescription, volume, power}) {
  
    useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
     return() => {
       document.removeEventListener('keydown', handleKeyPress);
     }
    })
    
  
    
   const handleKeyPress = (e) => {
      if(e.keyCode === clip.keyCode){
        playSound();
      };
    }
   
    const playSound = () => {
      document.body.style.background = clip.color;
      const audioTag = document.getElementById(clip.keyTrigger);
      setDescription(clip.keyTrigger);
      audioTag.play();
      if(power === false){
        audioTag.volume = 0;
      } else {
      audioTag.volume = volume;
      }
    }
    
    return (
      <button onClick = {playSound} className = 'drum-pad' id = {clip.id}>
        <audio className = 'clip' id = {clip.keyTrigger} src = {clip.url} />
        {clip.keyTrigger}
      </button>
    );
  }

  export default Pad;