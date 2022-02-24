import styled from "styled-components";

export const PrescribeMainContainer = styled.div`
.prescribe-slick{
  .main-div {
    p {
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 2.8rem;
letter-spacing: 0em;
color:#828282;
background-color: red;
  }
  }
}
 
  
`

export const PrescribeImgContainer = styled.div`
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 1rem;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
  }
  .inner-overlay {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    padding: 0 2rem;
    h3 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
  &:hover .inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }
`;

export const PrescribeImg = styled.img`

`;
