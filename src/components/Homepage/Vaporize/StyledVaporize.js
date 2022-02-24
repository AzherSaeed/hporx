import styled from "styled-components";
import { PrimaryHeading, PrimarySubHeading, TertiaryHeading, ViewMoreBtn } from "../../Globals/Globals";

export const VaporizeMainContainer = styled.div`
margin-top: 9rem;
font-style: normal;
.vaporize-slick .slick-prev:before, .vaporize-slick .slick-next:before {
font-size: 3rem !important;
color:#0000002e;
background: #f8f9fa;
    
  
}

/* .vaporize-slick .slick-next::before {
    content: url(./assets/images/arrow-next.svg) !important;
}
.vaporize-slick .slick-prev::before {
    content: url(./assets/images/arrow-prev.svg) !important;
} */
.vaporize-inner-container{
    /* padding:0 4rem; */
}
`

export const VaporizeSubHeading=styled(TertiaryHeading)`
margin-top: 3rem;
`
export const VaporizeImagesContainer = styled.div`
position:relative;
min-height:46.2rem;
`
export const VaporizeImg1 = styled.img`
position: absolute;
width: 38.5rem;
height: 41.5rem;
`
export const VaporizeImg2Container = styled.div`
.inner-overlay{
  color: white;
  position: absolute;
  top: 50%;
  right: 28%;
  z-index: 100;
  opacity: 1;
  
  }
&:hover .inner-overlay  {
  opacity: 1;
}
`
export const VaporizeImg2 = styled.img`
position: absolute;
width: 26.3rem;
height: 31.7rem;
border-radius:1.2rem;
right:10%;
bottom: 4%;
`
export const VaporizeViewMoreBtn = styled(ViewMoreBtn)`
margin-top: 5.2rem;
`