import './App.css'
import { useState } from 'react';
function App()  {
  const [ value, changeState] = useState(0);
  return(
    <>
    <div className="counter" >{value}</div>
    <button onClick={()=> changeState(value+1)}>INCREMENT</button>
    <button onClick={()=> changeState(value-1)}>DECREMENT</button>
    </>
  )
}

export default App