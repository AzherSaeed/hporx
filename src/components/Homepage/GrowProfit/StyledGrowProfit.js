import styled from "styled-components"
import GrowProfitBack from '../../../assets/growProfitBack.svg';

export const GrowProfitContainer = styled.div`
 text-align: center;
margin-top: 7rem;
`
export const GrowProfitHeading = styled.h3`
font-size: 3.5rem;
margin-top: 3rem;
`
export const GrowProfitSubHeading = styled.p`
font-size: 1.5rem;
`
export const GrowProfitImgsContainer = styled.div`
`
export const GrowProfitImg = styled.img`
`
export const GrowProfitSlickContainer = styled.div`
background-image:linear-gradient(to right, rgba(126, 213, 111, 0.753) , rgba(40, 180, 133, 0.753)), url(${GrowProfitBack}) ;
  background-color: #cccccc;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
margin-top: 3rem;
position: relative;
.overlay{
    position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
`