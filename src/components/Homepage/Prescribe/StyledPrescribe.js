import styled from "styled-components";
import { ViewMoreBtn } from "../../Globals/Globals";

export const PrescribeMainContainer = styled.div`
margin-top: 7.5rem;

`

export const PrescribeImgContainer = styled.div`
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1rem;
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
height: 35rem;

`;


export const ConsultDarkBtn = styled(ViewMoreBtn)`
background: #242424;
color: #FFFFFF;
`
export const PrescribeSlickMain = styled.div`
.prescribe-slick{
  .text-container{
    padding: 0 3rem;
    .prescribe-btns{
      margin-top: 3.5rem;
      .prescribe-btn2{
          margin-left: 1rem;
        }
      @media only screen and (max-width: 1200px) {
        .prescribe-btn2{
          margin-top: 1rem;
          margin-left: 1rem;
        }
}

    
    }
  }
  .slick-list {
  margin: 0 -10px;
}
}

`