import styled from "styled-components"
import GrowProfitBack from '../../../assets/growProfitBack.svg';

export const GrowProfitMainContainer = styled.div`
 text-align: center;
margin-top: 7rem;
h2{
  font-size: 3.5rem;
margin-top: 3rem;
}
p{
  font-size: 1.5rem;
}
.grow-profit-slick  .slick-next {
    right: 4rem;
    z-index: 1;
}
.grow-profit-slick  .slick-prev {
    left: 2.1rem;
    z-index:1;
}
.grow-profit-slick .slick-prev:before, .grow-profit-slick .slick-next:before {
    font-size: 4rem !important; 
}
`

export const GrowProfitImgsContainer = styled.div`
`
export const GrowProfitImg = styled.img`
`
export const GrowProfitSlickContainer = styled.div`
background-image:linear-gradient(to right, rgba(126, 213, 111, 0.753) , rgba(40, 180, 133, 0.753)), url(${GrowProfitBack}) ;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
margin-top: 3rem;

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