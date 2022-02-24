import styled from "styled-components";
import { HeroButton } from "../../Homepage/Header/StyledHeader";

export const InhalateMainContainer = styled.div`
margin-top: 8.5rem;
font-style: normal;
text-align: center;
.inhalate-slick  .slick-next {
    right: 0rem;
    z-index: 1;
}
.inhalate-slick  .slick-prev {
    /* left: 2.1rem; */
    z-index:1;
}
.inhalate-slick .slick-prev:before, .inhalate-slick .slick-next:before {
    font-size: 4rem !important; 
}
h3{
font-size: 4.8rem;
font-weight: 500;
line-height: 7.2rem;
letter-spacing: 0em;
color: #242424;

}
p{
font-size: 1.8rem;
font-weight: 400;
line-height: 2.7rem;
letter-spacing: 0em;
color:#828282;

}
`
export const InhalateTextContainer = styled.div`
padding:0 4rem;
`
export const InhalatedImgContainer = styled.div`
padding: 0 1rem;
position:relative;
text-align:center;
.overlay {
position: absolute;
  top: 0;
  bottom: 0;
  left: 1rem;
  right: 1rem;
 
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
  width:100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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
export const InhalateButtonContainer = styled.div`
margin-top: 4.8rem;
`

export const InhalateButton = styled(HeroButton)`
margin-top: 4rem;
padding: 0.5rem 2rem;
border: 1px solid black;
color: black;
`

