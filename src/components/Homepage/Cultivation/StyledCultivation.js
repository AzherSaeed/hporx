import styled from "styled-components";

export const CultivationMainContainer = styled.div`
margin-top: 12rem;
text-align: center;
h3{
font-size: 3.5rem;
}
p{
    font-size: 1.6rem;
}
.cultivation-slick .slick-prev:before, .cultivation-slick .slick-next:before {
    font-size: 3.5rem !important; 
    color: white !important;
    opacity: 1;
    text-shadow: 0px 2px 6px rgb(0 0 0 / 50%);
    
}
    .cultivation-slick  .slick-next {
    right:5rem;
    z-index: 1;
    
}
@media screen and (max-width: 480px) {
    .cultivation-slick  .slick-next {
    right:6rem;
    z-index: 1;
}
}
.cultivation-slick  .slick-prev {
    left: 1rem;
    z-index:1;   
}

p{
margin: 0;
font-size: 3.2rem;
font-style: normal;
font-weight: 500;
line-height: 4.8rem;
letter-spacing: 0em;
color:#4F4F4F;
;
}

`
export const CultivationImgContainer = styled.div`
position:relative;
transition: .5s ease;
margin-top: 3.5rem;
text-align: -webkit-center;
background: #F7F7F7;
.product-description{
   p{
    text-align: center;
   }
}
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
h3{
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: 3rem;
letter-spacing: 0em;
text-align: center;
color: #242424;
}
p{
font-size: 1.8rem;
font-style: normal;
font-weight: 400;
line-height: 2.7rem;
letter-spacing: 0em;
text-align: start;
color: #828282;


}
`

export const CultivationImg1 = styled.img`
height:100%;
object-fit:cover;
`

export const CultivationiImg = styled.img`
width: 32rem;
height:40rem;
`
