import styled from "styled-components";

export const PrimaryHeading = styled.h2`
font-size: 4.8rem;
font-style: normal;
font-weight: 500;
line-height: 7.2rem;
letter-spacing: 0em;
text-transform: uppercase;
margin: 0;

@media screen and (max-width : 600px){
font-size: 3rem;
font-style: normal;
line-height: 6.2rem;
}
`
export const SubHeading = styled.h2`  
font-size: 3.2rem;
font-style: normal;
font-weight: 500;
line-height: 4.8rem;
letter-spacing: 0em;
`
export const SubHeadingSecondary = styled.h2`  
font-size: 2.4rem;
font-weight: 500;
line-height: 3.6rem;
letter-spacing: 0em;


`
export const TertiaryHeading = styled.h3`
font-size: 1.8rem;
font-style: normal;
font-weight: 400;
line-height: 2.7rem;
letter-spacing: 0em;
color: #828282;
margin: 0;
`
export const TertiaryHeadSecondary = styled.h3`
font-size: 1.8rem;
font-style: normal;
font-weight: 500;
line-height: 2.4rem;
letter-spacing: 0em;
color: #828282;
opacity: 0.8;
margin: 0;
`
export const TertiaryHeadingMedium = styled.h3`
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 2.8rem;
letter-spacing: 0em;
margin: 0;

`
export const TertiaryHeadingSmall = styled.h3`
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 2.4rem;
letter-spacing: 0em;
color: #828282;
margin: 0;
`

export const ViewMoreBtn = styled.button`
font-style: normal;
height: 4.8rem;
width: 15.4rem;
border: 1px solid #242424;
border-radius: 7rem;
color: #242424;
font-size: 1.6rem;
background: transparent;
font-weight: 500;
line-height: 2.4rem;
letter-spacing: 0em;
text-transform: capitalize;
cursor: pointer;
  &:hover{
 background-color: #E84025;
border: 1px solid #E84025;
  color: white;
  }   
`
export const ShopBtnTransparent = styled.button`
font-style: normal;
height: 4.8rem;
width: 15.4rem;
border: 1px solid #FFFFFF;
border-radius: 7rem;
color: #FFFFFF;
font-size: 1.6rem;
font-weight: 500;
line-height: 2.4rem;
letter-spacing: 0em;
background: transparent;

text-transform: capitalize;
cursor: pointer;
  &:hover{
 background-color: #E84025;
border: 1px solid #E84025;
  color: white;
  }   
`
export const PlayBtnContainer = styled.div`
.btn{
    border: none;
    border-radius: 50%;
    background-color: white;
    padding: 0.4rem;
  }

`
export const PlayBtnImg = styled.img`
padding: 1.2rem;
transition: all .8s;;
&:hover{
  transform: scale(1.1);
}


`
export const ShopNowBtn = styled.button`
padding: 0.9rem 2rem;
border: 2px solid white;
color: white;
  border-radius: 2rem;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover{
    background-color: #E84025;
border: 2px solid #E84025;
    color: white;
  }   
`
export const AddToCartBtn = styled.button`
padding: 0.8rem 2rem;
border: 2px solid white;
color: white;
  border-radius: 2rem;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover{
    background-color: #E84025;
border: 2px solid #E84025;
    color: white;
  }   
`
export const PriceBtn = styled.button`
padding: 0.8rem 4rem;
border: 1px solid white;
color: black;
  border-radius: 2rem;
  background: white;
  font-size: 1.2rem;
  cursor: pointer;
  
`