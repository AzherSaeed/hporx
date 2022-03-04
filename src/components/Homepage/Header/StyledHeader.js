import styled from "styled-components";
import headerImg from '../../../assets/banner.svg';

const StyledHero = styled.div`
  background-image: url(${headerImg});
  background-color: #cccccc;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;

`
const HeroHeading = styled.h3`
margin-top: 4rem;
 font-size: 8.5rem;
  font-weight: 400;
  line-height: 11.3rem;
  color: white;

  @media screen and (max-width: 768px){
    font-size: 6.5rem;
  }
  @media screen and (max-width: 480px){
    font-size: 5.5rem;
  }
`


const HeroButton = styled.button`
margin-top: 4rem;
   border-color: #fff;
  padding: 1rem 3rem;
  border-radius: 2rem;
  border: 1px solid white;
  background: transparent;
  font-size: 1.6rem;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #E84025;
    color: white;
    border: 1px solid #E84025; 
  }
  `
const HomePlayButtonContainer = styled.div`
background-color: white;
width: 54px;
height: 54px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`
const HeroPlayIcon = styled.img`
  height: 6.2rem;
  cursor: pointer;
  width:  15.26px;
height :  16.43px
  `
export const VideoModalMain=styled.div`
video{
  width: 100%;
  height: auto;
}
.btn-close{
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 5rem;
    border: .1rem solid #fff;
    background-color: #fff;
    position: absolute;
    top: -4rem;
    right: -2rem;
    opacity:.5;
    &:hover{
        color: #000;
        text-decoration: none;
       opacity: .75
    }
    z-index: 100;
}
`
export { StyledHero, HeroHeading, HeroButton, HeroPlayIcon, HomePlayButtonContainer }
