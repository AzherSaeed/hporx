import styled from "styled-components"
import { InhalateButton } from "../../Inhalete/StyledInhalate"

export const PrescribeMainContainer=styled.div`

h3{
    font-size: 3.8rem;

}
p{
    font-size: 1.7rem;

}
.main-div{
    display:flex;
    min-height: 49.7rem;
    display: flex;
    align-items:flex-start;
    justify-content: center;
    padding: 5rem 1rem;
}
.slick-main-div{
    min-height:20rem;
}
`

export const PrescribeImgContainer=styled.div`
padding: 5rem 1rem;
position:relative;
.overlay {
padding: 5rem 1rem;
position: absolute;
  top: 5rem;
  bottom: 5rem;
  left: 0;
  right: 0;
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
  text-align: center;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  padding:0 2rem;
  h3{
      font-size:1.6rem;
  }
  p{
      font-size: 1rem;
  }
  }
&:hover .inner-overlay ,&:hover .overlay  {
  opacity: 1;
}
`

export const PrescribeImg=styled.img`

`
export const PrescribeButton=styled(InhalateButton)`
margin-top:3rem
`