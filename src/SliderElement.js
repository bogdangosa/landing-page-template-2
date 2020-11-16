import React from 'react'
import './css/SliderElement.css'
import RoundButton from './RoundButton'

const SliderElement =(props) =>{
    return(
        <div className="SliderElement">
            <div style={{
                width:"100%",
                height:"100%",
                position:"absolute",
                top:"0",
                left:"0",
                background: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('${process.env.PUBLIC_URL}/SliderImages/${props.number}.jpg') no-repeat center`,
                backgroundSize: 'cover'}}></div>
            
            <div className="Information">
                <h1>We are professional</h1>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                <RoundButton text="Get Started" />
            </div>
        </div>
    
    );
}


export default SliderElement;