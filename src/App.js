import { useState } from 'react';
import './App.css';
import Dice from './Dice';
function App() {
  const [randomNumber1,setRandomNumber1]=useState(1);
  const [randomNumber2,setRandomNumber2]=useState(1);
  const roll=()=>{
    var x=5;
    document.querySelector('button').style.pointerEvents = 'none';
    var myInterval=setInterval(()=>{
      x--;
     
    setRandomNumber1(Math.floor(Math.random()*6+1));
    setRandomNumber2(Math.floor(Math.random()*6+1));
    if(x<0){
    {clearInterval(myInterval);
    document.querySelector('button').style.pointerEvents = 'all';
     
    }
    }
    },400);
    
  };
  return (
    <div className="App">
      <div className="dices">
        <Dice randomNumber={randomNumber1}/> 
        <Dice randomNumber={randomNumber2}/> 
      </div>
      <button onClick={roll}>Zar At</button>
    </div>
  );
}

export default App;
