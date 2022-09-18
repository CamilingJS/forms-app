

import TextContent from './TextContent';
import TextInput from './TextInput';
import ButtonGroup from './ButtonGroup';

export default function LeftContainer(){

    return(
        <div className="LeftContainer">
            <div className="card" >
                <TextContent />
                <TextInput />
                <ButtonGroup />
            </div>
        </div>
    )
}