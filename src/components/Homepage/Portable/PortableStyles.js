import styled from "styled-components";

export const PortableMainContainer = styled.div`
margin-top: 12rem;
.portable-slick .slick-prev:before, .portable-slick .slick-next:before {
    font-size: 3.5rem !important; 
    color: white !important;
    opacity: 1;
    text-shadow: 0px 2px 6px rgb(0 0 0 / 50%);
    
}
    .portable-slick  .slick-next {
    right:11rem;
    z-index: 1;
    
}
@media screen and (max-width: 480px) {
    .portable-slick  .slick-next {
    right:6rem;
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
    font-size: 2rem;
}
.mini-title{
    font-size: 1rem;

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

export const PortableImg1 = styled.img`
height:100%;
object-fit:cover;
`

export const PortableMiniImg = styled.img`
margin-top: 2rem;
`
