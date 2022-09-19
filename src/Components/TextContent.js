
export default function TextContent({stage}){

    const LABEL_TEXT = [
        'Apply to work with our agency',
        'What\'s your budget?',
        'Anything else we should show?',
        'Thank you!'
    ]

    

    return(
        <div className="TextContent">
           <h1>{LABEL_TEXT[stage]}</h1>
        </div>
    )
}