import styled from "styled-components";
import featureMarkBack from '../../../assets/featureMarketBack.png'
import { PrimaryHeading, TertiaryHeadingMedium, TertiaryHeadSecondary, ViewMoreBtn } from "../../Globals/Globals";


export const FeatureMarketText=styled.div`
text-align: center;
margin-top: 9rem;
`


export const FeatureMarkMain = styled.div`
margin-top: 4.5rem;
text-align: center;
color: #FFFFFF;
background-image: url(${featureMarkBack}) ;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding: 4rem 0;
`
export const FeatureMarkImg = styled.img`

`
export const FeatureSubHeading = styled(TertiaryHeadingMedium)`
opacity: 0.8;
`
export const FeatureHeading = styled(PrimaryHeading)`
text-transform: capitalize;
`
export const FeatureMarketPlaceBtn = styled(ViewMoreBtn)`
margin-top: 5rem;
color: #FFFFFF;
border: 1px solid #FFFFFF;
background: transparent;
`
export const FeatureMarkTextContainer = styled.div`
margin-left:4rem
`
export const FeatureMarketSub = styled(TertiaryHeadSecondary)`
margin-top: 1rem;
`