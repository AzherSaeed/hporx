import styled from "styled-components";
import { ViewMoreBtn } from "../../Globals/Globals";

export const PortableMainContainer = styled.div`
.portable-slick .slick-prev:before, .portable-slick .slick-next:before {
    font-size: 3.5rem !important; 
    color: white !important;
    opacity: 1;
    text-shadow: 0px 2px 6px rgb(0 0 0 / 50%);
    
}
    .portable-slick  .slick-next {
    right:0rem;
    z-index: 1;
    
}
@media screen and (max-width: 480px) {
    .portable-slick  .slick-next {
    right:0rem;
    z-index: 1;
}
}
.portable-slick  .slick-prev {
    left: -1rem;
    z-index:1;   
}
h2{
    font-size: 4rem;
}
p{
margin-top: 0.5rem;
font-size: 2.4rem;
font-style: normal;
font-weight: 500;
line-height: 3.6rem;
letter-spacing: 0em;
color:#333333;

}
.mini-title{
margin-top:1.1rem;
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 24rem.4rem;
letter-spacing: 0em;
color:#828282;

}
`
export const PortableMiniImgContainer = styled.div`
position:relative;
transition: .5s ease;

.inner-overlay{
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  }
   &:hover,  &:hover .inner-overlay{
        opacity: 1;   
    }
`
export const PortableSlickMain = styled.div`
`
export const PortableImg1Container = styled.div`
position:relative;
transition: .5s ease;

.inner-overlay{
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 1;
  }
   /* &:hover,  &:hover .inner-overlay{
        opacity: 1;   
    } */
`
export const PortableImg1 = styled.img`

`
export const PortableMiniImg = styled.img`
@media screen and (min-width:1400px) {
    width: 37rem !important;
}

`
export const PortableMoreBtn = styled(ViewMoreBtn)`
margin-top: 2.8rem;
`