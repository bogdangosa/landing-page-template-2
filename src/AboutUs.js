import React from 'react'
import './css/AboutUs.css'
import Card1 from './Card1'

const AboutUs = () =>{
    return (
        <div className="AboutUs">
            <h1 className="Title">About Us</h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="CardsContainer">
                <Card1 Title="Our Mission" Photo="about-mission"/>
                <Card1 Title="Our Plan" Photo="about-plan"/>
                <Card1 Title="Our Vision" Photo="about-vision"/>
            </div>
        </div>
    );
}

export default AboutUs;