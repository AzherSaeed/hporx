import styled from "styled-components";
import { PrimarySubHeading, TertiaryHeading } from "../../Globals/Globals";

export const ChillumMainContainer = styled.div`
text-align: center;
margin-top: 9rem;
.chillum-slick  .slick-next {
    right: 0rem;
    z-index: 1;
}
.chillum-slick  .slick-prev {
    left: 0rem;
    z-index:1;
}
.chillum-slick .slick-prev:before, .chillum-slick .slick-next:before {
    font-size: 4rem !important; 
}

`
export const ChillumSlickContainer = styled.div`
margin-top: 5rem;


`
export const ChillumSubHeading=styled(TertiaryHeading)`
margin-top:2px;
padding: 0 2rem;
`
export const ChillumImgContainer = styled.div`

`
export const ChillumImg = styled.img`

`

