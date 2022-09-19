import { useState } from 'react';

import TextContent from './TextContent';
import TextInput from './TextInput';


export default function LeftContainer({stage, setStage}){

    const [email, setEmail] = useState('');
    const [buttonData, setButtonData] = useState('');
    const [details, setDetails] = useState('');



    return(
        <div className="LeftContainer">
            <div className="card" >
                <TextContent stage={stage} />
                <TextInput 
                    email={email} updateEmail={setEmail}
                    buttonData={buttonData} setButtonData={setButtonData}
                    details={details} updateDetails={setDetails}
                    stage={stage} setStage={setStage} />
                { stage !== 3 && <button onClick={()=>setStage( stage + 1 )}  >Next</button> }
           
            </div>
        </div>
    )
}