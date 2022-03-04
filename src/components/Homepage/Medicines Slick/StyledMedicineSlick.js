import styled from "styled-components";

export const MedicineContainerMain = styled.div`
  margin-top: 9rem;
`;
export const MedicineImgContainer = styled.div`
  position: relative;
  text-align: center;
  margin-top: 1.7rem;
  text-align: -moz-center;
  text-align: -webkit-center;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1rem;
    right: 1.5rem;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
    border-radius: 1rem;
  }
  .inner-overlay {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    padding: 0 2rem;
  }
  &:hover,&:hover .inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }
`;

export const MedicineSlickContainer = styled.div`
  .medicine-text{
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 1.6rem;
letter-spacing: 0em;
  }
  .text-red{
    color: #E84025;
opacity: 0.8;
  }
  
  `
export const MedicineImg = styled.img`
width: 29.8rem;
height: 28.5rem;

`;
