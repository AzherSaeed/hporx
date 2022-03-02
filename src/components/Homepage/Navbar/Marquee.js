import React from 'react'; 

import Marquee from "react-fast-marquee";
import './offCanvas.css'


    const MarqueeView = () => {
        return(
        <div className="container"  style={{background : '#0000003b' , padding : '3px 0' , fontSize : '12px' , color  : 'white' }}>
            <Marquee gradient={false} pauseOnHover direction="right" speed="70"> simply dummy text of the printing and typesetting industry</Marquee>
        </div>
        )
    }


    export default MarqueeView



