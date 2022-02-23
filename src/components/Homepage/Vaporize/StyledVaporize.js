import styled from "styled-components";

export const VaporizeMainContainer = styled.div`
margin-top: 12rem;
margin-bottom:5rem;
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
    padding:0 4rem;
}
h2{
font-size: 3.8rem;
font-style: normal;
}
p{
font-size: 1.6rem;
font-style: normal;
padding-right:2rem;;
}
`

export const VaporizeImagesContainer = styled.div`
position:relative;
min-height:53rem;
`
export const VaporizeImg1 = styled.img`
position: absolute;
height:90%;
`
export const VaporizeImg2 = styled.img`
position: absolute;
width:50%;
border-radius:10px;
right:0;
bottom: -4rem;
`
