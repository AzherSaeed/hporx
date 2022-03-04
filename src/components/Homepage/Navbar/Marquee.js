import React from 'react'; 

import Marquee from "react-fast-marquee";
import './offCanvas.css'


    const MarqueeView = () => {
        return(
        <div style={{background : '#0000003b' , height : '30px' , fontSize : '12px' , color  : 'white' }}>
            <Marquee style={{paddingTop : '5px'}} gradient={false} pauseOnHover direction="left" speed="70"> simply dummy text of the printing and typesetting industry</Marquee>
        </div>
        )
    }


    export default MarqueeView



