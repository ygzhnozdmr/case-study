import './App.css';
import {useEffect, useState} from 'react';
import CounterSet from './counterSet';

function App() {

// MY CODE//
  const [array, setArray] = useState([]);
  const [isRunning, setisRunning] = useState(false);
  const [intervalNum, setIntervalNum] = useState(5000);
  
  
  useEffect(() => {
  
     if(isRunning === true){
      let interval = setInterval(()=>{
        const randomNum = Math.floor(Math.random() * 10)
        setArray((prevArray)=>[ ...prevArray, randomNum])
      },intervalNum) 
     
      return () => clearInterval(interval); 
     }

  }, [isRunning]);

    const handleToggle = () =>{
      setisRunning(!isRunning);

    }
    
    const handleResetToggle = () =>{
      setisRunning(false);
      setArray([]);}

    const takeInput = (event) =>{
      setIntervalNum(event.target.value);

    }
    
    const submitInput = (e) =>{
      e.preventDefault();

    }

// let awaitFunc = async () => {
// await counterSet();
// }
  //MYCODE

  return (
<div className="App">
  <button onClick={handleToggle}>
  {isRunning === false ? "Start" : "Stop"} 
  </button>
  <button onClick={handleResetToggle}>Reset</button>

  <input type="text" value={intervalNum} onChange={takeInput} onSubmit={submitInput}></input>
  <button onClick={submitInput}>Submit</button>


  <CounterSet array={array}></CounterSet>
 
</div>
  );
}

export default App;
