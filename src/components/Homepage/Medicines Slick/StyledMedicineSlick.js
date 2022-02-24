import styled from "styled-components";

export const MedicineContainerMain = styled.div`
  margin-top: 3rem;
`;
export const MedicineImgContainer = styled.div`
  position: relative;
  text-align: center;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    padding: 0 2rem;
  }
  &:hover .inner-overlay,
  &:hover .overlay {
    opacity: 0;
  }
`;
export const MedicineImg = styled.img`
width: 23.6rem;
height: 23.3rem;

`;
