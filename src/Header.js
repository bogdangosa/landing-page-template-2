import React,{ useState } from "react"
import './css/Header.css';

const Header = () =>{
    const [IsUp,SetIsUp] = useState(true);
    window.addEventListener('scroll',()=>{
        const scrolled = window.scrollY;
        if(scrolled==0)
            SetIsUp(true);
        else
            SetIsUp(false);
    });

    return (
        <div className={IsUp ? "Header transparent" : "Header black"}>
            <h1 className="Logo">MyLogo</h1>
    
            <ul className="NavBar">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portofolio</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>

        </div>
    );
}

export default Header;
