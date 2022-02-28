import React from 'react';
import playIcon from '../../../assets/play-btn.svg'
import {StyledHero,HeroHeading,HeroButton,HeroPlayIcon} from './StyledHeader';
import NavBar from '../Navbar/NavBar';
const Header = () => {
    return (
        <StyledHero>
        <NavBar/>
       <div className='hero-text-container'>
         <HeroPlayIcon src={playIcon}/>
         <HeroHeading>THERAPEUTICS</HeroHeading>
         <HeroButton>Appointment</HeroButton>
       </div>
      </StyledHero>
    )
}

export default Header































// import React from 'react'
// import Navbar from '../navbar/Navbar'
// import './Header.css'
// const Header = () => {
//     return (
//         <div id="hero-main">
//             {/* <Navbar /> */}
//             <div className="hero-container">
//                 <div>
//                 <div className='hero-title-length'>
//                     <p>Recruitment</p>
//                     <p className='hero-title'> A better way to find and  hire professionals</p>
//                     </div>
//                     <p className='hero-sub hero-sub-length'>Post a job or project and get a short list of verified and experienced designers,developers, and marketers.</p>
//                     <div className="hero-btn-main">
//                         <button className="hero-btn-touch" type="submit">Get In touch now</button>
//                         <button className="hero-btn-watch" disabled type="submit">Watch Video</button>
//                     </div>
                
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header
