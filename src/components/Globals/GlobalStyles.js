import styled from "styled-components";

export const ImgOverlayContainer = styled.div`
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
  }
&:hover .overlay {
  opacity: 1;
}

`