import styled from "styled-components";

export const CutivationMainContainer = styled.div`
font-style: normal;
text-align: center;
margin-top: 8.5rem;

.cutivation-slick  .slick-next {
    right: 4rem;
    z-index: 1;
}
.cutivation-slick  .slick-prev {
    left: 2.1rem;
    z-index:1;
}
.cutivation-slick .slick-prev:before, .cutivation-slick .slick-next:before {
    font-size: 4rem !important; 
}
.tertiary-heading{
    font-size:1.7rem;
margin-top: 0.8rem;
}
h3{
    font-size: 4rem;
}
p{
    font-size: 2.4rem;
margin-top: 2.5rem;
}
`

export const CutivationImgContainer = styled.div`
.inner-overlay{
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  padding:0 2rem;
  }
&:hover .inner-overlay {
  opacity: 1;
}

padding: 2rem;

`
export const CutivationImg = styled.img`
`

export const CutivationSlickContainer = styled.div`
margin-top: 4rem;
`