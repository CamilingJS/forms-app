import { useState } from "react"

// .ButtonGroup > .selected-button {
//     color: teal; 
//     background-color: white;
//     transition: .5s ease-in;
//   }

const ALT_STYLES = {
    color: 'teal',
    background: 'white'
}

const BUTTON_TEXT = [
    '$100-$1K', '$1K-$5K', 'No limit'
]

export default function ButtonGroup({ setButtonSelection, setButtonData }){

    const [selectedButton, setSelectedButton] = useState(0)


    return(
        <div className="ButtonGroup">
            
            {/* <button onClick={()=>setSelectedButton(0)} style={ selectedButton === 0 ? ALT_STYLES : {} } >$100-$1K</button>
            <button onClick={()=>setSelectedButton(1)} style={ selectedButton === 1 ? ALT_STYLES : {} } >$1K-$5K</button>
            <button onClick={()=>setSelectedButton(2)} style={ selectedButton === 2 ? ALT_STYLES : {} } >No limit</button> */}

            {
                BUTTON_TEXT.map((btnText, i) => (
                    <button onClick={()=>{setSelectedButton(i);     
                        setButtonData(btnText);
                    }} 

                    style={ selectedButton === i ? ALT_STYLES : {} } >
                        {btnText}
                    </button>
                )
                    
                )
            }
            
        </div>
    )
}