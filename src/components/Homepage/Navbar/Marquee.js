import React from 'react'; 

import Marquee from "react-fast-marquee";
import './offCanvas.css'
import marqee from '../../../assets/marqee-logo.png'


    const MarqueeView = () => {
        return(
        <div style={{background : '#0000003b' , height : '30px' , fontSize : '12px' , color  : 'white' }}>
            <Marquee style={{paddingTop : '5px'}} gradient={false} pauseOnHover direction="left" speed="70">
                <span style={{display:'inline-block',margin:'0 1rem'}}>
                    <img className='marq-logo'  style={{verticalAlign:'bottom',}} src={marqee} alt={marqee} />
                </span>
                Welcome to Spannabis 2022, COVID-19 was a reality check for humanity, and it also demonstrated the power and genus of flowering plants in the family Cannabaceae. Team HPORx™, Banco de Sabadell, S.A  and The Financial Sector Advisory Center (FinSAC) and our Barcelona City Mayor, Ava Colau, CatSALUT and the Generalitat de Catalunya, welcome you to the Fairground in Cornellà de Llobregat,Av. de la Fama, 8407, 08940 Cornellà de Llobregat, Barcelona, Spain.  We wish you a successful event and a phenomenal year. We are certain that 2022 will be a year in which you may continue to grow profit and profit from your grow!
Team HPORx March 11, 2020.</Marquee>
        </div>
        )
    }


    export default MarqueeView



