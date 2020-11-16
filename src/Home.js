import React, { useState } from 'react'
import SliderElement from './SliderElement'
import './css/Home.css'
const Home = () =>{
    const [slideCount,SetCount] = useState(1);

    const IncrementSlideNumber = ()=>{
        if(slideCount==1)
            SetCount(5);
        else
            SetCount(slideCount-1);
    }
    const DecrementSlideNumber = ()=>{
        if(slideCount==5)
            SetCount(1);
        else
            SetCount(slideCount+1);
    }

    return (
        <div className="Home">
            <SliderElement number={slideCount}/>
            <div className="Arrow ArrLeft" onClick={IncrementSlideNumber}>
                <div className="line l1L"></div>
                <div className="line l2L"></div>
            </div>
            <div className="Arrow ArrRight" onClick={DecrementSlideNumber}>
                <div className="line l1R"></div>
                <div className="line l2R"></div>
            </div>
        </div>
    );
        
}


export default Home;