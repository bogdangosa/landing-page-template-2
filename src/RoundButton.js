import React from 'react'
import './css/RoundButton.css'


const RoundButton = (props) =>{

    return (
        <div className="RoundButton">
            {props.text}
        </div>
    );
        
}


export default RoundButton;