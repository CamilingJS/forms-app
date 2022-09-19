import ButtonGroup from "./ButtonGroup"

export default function TextInput({stage, updateEmail, email, buttonData, setButtonData, updateDetails, details}){

    let content; 
    if (stage === 0){
        content = (
            <input 
            onChange={e => updateEmail(e.target.value)}
            type="text" 
            placeholder="What's your email?" /> 
        )
    } else if (stage === 1) {
        content = (
            <ButtonGroup buttonData={buttonData} setButtonData={setButtonData} />
          
        )
        
    } else if (stage === 2){
        content = (
            <input onChange={e => updateDetails(e.target.value)} type="text" /> 
        )
        
    } else if (stage === 3){
        alert(JSON.stringify({email,details,buttonData}))
    }

    return(
        <div className="TextInput">
            {content}
        </div>
    )
}