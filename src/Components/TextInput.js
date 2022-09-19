import ButtonGroup from "./ButtonGroup"

export default function TextInput({stage, setStage}){

    let content; 
    if (stage === 0){
        content = (
            <input type="text" placeholder="What's your email?" /> 
        )
    } else if (stage === 1) {
        content = (
            <ButtonGroup />
        )
        
    } else if (stage === 2){
        content = (
            <input type="text" /> 
        )
        
    }

    return(
        <div className="TextInput">
            {content}
        </div>
    )
}