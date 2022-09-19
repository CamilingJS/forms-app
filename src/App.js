import { useState } from 'react'
import './App.css';

import LeftContainer from './Components/LeftContainer';
import RightImage from './Components/RightImage';


function App() {
  const [stage, setStage] = useState(0)

  return (
    <div className="App">
      <div className="nav" ><div className='logoJayCam'></div></div>
      <div className="lr-container" >
        <LeftContainer stage={stage} setStage={setStage} / >
        <RightImage stage={stage} / >
      </div>
      
    </div>
  );
}

export default App;
