import React from "react"
import'./css/Card1.css'

const Card1 = (props) =>{
    
    return(
        <div className="Card1">
            <div className="Image" style={{background:`url('${process.env.PUBLIC_URL}/AboutImages/${props.Photo}.jpg') center no-repeat`, backgroundSize:"cover"}}></div>
            <div className="logo"></div>
            <h2 className="Title">{props.Title}</h2>
            <p className="Text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    );
}

export default Card1;