import styled from "styled-components";
import { HeroButton } from "../Homepage/Header/StyledHeader";

export const InhalateMainContainer = styled.div`
margin-top: 8.5rem;
font-style: normal;
text-align: center;
.inhalate-slick  .slick-next {
    right: 4rem;
    z-index: 1;
}
.inhalate-slick  .slick-prev {
    left: 2.1rem;
    z-index:1;
}
.inhalate-slick .slick-prev:before, .inhalate-slick .slick-next:before {
    font-size: 4rem !important; 
}
h3{
    font-size: 4rem;
}
p{
    margin-top: 3rem;
font-size: 1.5rem;
}
`
export const InhalatedImgContainer = styled.div`

position:relative;
.overlay {
position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(0, 0, 0, 0.71)
  
}
.inner-overlay{
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  opacity: 0;
  padding:0 2rem;
  }
&:hover .inner-overlay ,&:hover .overlay  {
  opacity: 1;
}

`
export const InhalteImg = styled.img`

`
export const InhalateContainer = styled.div`
.inhalate-slick{
    margin-top: 7rem;
}
`
export const InhalateButton = styled(HeroButton)`
margin-top: 4rem;
padding: 0.5rem 2rem;
border: 1px solid black;
color: black;
`

