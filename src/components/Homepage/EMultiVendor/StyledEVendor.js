import styled from "styled-components";
import { ViewMoreBtn } from "../../Globals/Globals";

export const EVendorMain = styled.div`
margin-top: 9rem;
text-align: center;
.evendor-2{
    margin-top: 6.7rem;
}
.slick-container{
    margin-top: 6.5rem;
}
p{
font-size: 1.8rem;
font-style: normal;
font-weight: 500;
line-height: 2.4rem;
letter-spacing: 0em;
color: #333333;
opacity: 0.8;
}

`
export const EVendorImgContainer = styled.div`
position: relative;
  text-align: center;
  text-align: -moz-center;
  text-align: -webkit-center;
  .overlay {
    position: absolute;
    top: 4rem;
    bottom: 4rem;
    left: 4.5rem;
    right: 6rem;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
    border-radius: 1rem;
  }
  .inner-overlay {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    padding: 0 2rem;
  }
  &:hover,&:hover .inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }
`
export const EVendorImg = styled.img`
width: 
23.4rem;
height: 
24.5rem;

`
export const EVendorMiniImg = styled.img`
width : 
8.2rem;
height : 
2.7rem;

`
export const EVendorViewMoreBtn=styled(ViewMoreBtn)`
margin-top:5.6rem

`