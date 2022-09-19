import { useState } from 'react'
import './App.css';

import LeftContainer from './Components/LeftContainer';
import RightImage from './Components/RightImage';


function App() {
  const [stage, setStage] = useState(0)

  return (
    <div className="App">
      <h1>Navbar Place Holder</h1>
      <div className="lr-container" >
        <LeftContainer stage={stage} setStage={setStage} / >
        <RightImage stage={stage} / >
      </div>
      
    </div>
  );
}

export default App;
