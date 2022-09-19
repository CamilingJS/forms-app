

import TextContent from './TextContent';
import TextInput from './TextInput';


export default function LeftContainer({stage, setStage}){

    return(
        <div className="LeftContainer">
            <div className="card" >
                <TextContent stage={stage} />
                <TextInput stage={stage} setStage={setStage} />
              
                { stage !== 3 && <button onClick={()=>setStage( stage + 1 )}  >Next</button> }
           
            </div>
        </div>
    )
}