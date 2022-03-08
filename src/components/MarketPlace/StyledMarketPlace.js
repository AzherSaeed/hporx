import styled from "styled-components";
import { SubHeading, SubHeadingSecondary, TertiaryHeadingMedium, ViewMoreBtn } from "../Globals/Globals";


export const MarketPlaceMain = styled.div`

`
export const MarkInnerContainer = styled.div`
 position: relative;
`
export const MarketSlickContainer = styled.div`
width: 90rem;
 position: absolute;
 bottom: 3rem;
 right: 0;
 outline: none;
 border: none;
 .marketplace-slick{
.slick-list {
  margin: 0 2.5rem;
  
}
 }
 
 @media screen and (max-width:1250px) {
 width: 100%;
 position:static;
 width: auto;
 margin-top: 2rem;
 }
 @media screen and (max-width:450px) {
width: 100%;
 }

`

export const MarketplaceImg = styled.img`

`
export const MarketSubHead = styled(SubHeading)`
margin-top: 4.8rem;
`
export const MarketSubHeadSecond = styled(SubHeadingSecondary)`
margin-top: 1rem;
color: #E84025;
opacity: 0.8;
`
export const MarketContentContainer = styled.div`
  @media screen and (max-width : 775px)   {
    padding-bottom: 3rem;
  }
`
export const MarketReHeading = styled(MarketSubHeadSecond)`
  color: red;
  font-style: italic;
`
export const MarketTertiaryHeadMedium = styled(TertiaryHeadingMedium)`
color: #828282;
opacity: 0.8;
margin-top: 0.9rem;
`
export const MarketViewMoreBtn = styled(ViewMoreBtn)`
margin-top: 4.8rem;

`
export const MarkSlickImgContainer = styled.div`
position: relative;
  text-align: center;

  .inner-overlay {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 1;
    
    
}



`
export const MarkSlickImg = styled.img`
width: 41rem;
@media screen and (max-width:430px) {
  height:23rem;
}

`