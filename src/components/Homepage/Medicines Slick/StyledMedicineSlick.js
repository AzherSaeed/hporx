import styled from "styled-components";

export const MedicineContainerMain = styled.div`
  margin-top: 3.4rem;
`;
export const MedicineImgContainer = styled.div`
  position: relative;
  text-align: center;
  text-align: -moz-center;
  text-align: -webkit-center;
  .overlay {
    position: absolute;
    top: 6.5rem;
    bottom: 5rem;
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
export const MedicineImg = styled.img`
width: 30rem;
height: 32rem;

`;
