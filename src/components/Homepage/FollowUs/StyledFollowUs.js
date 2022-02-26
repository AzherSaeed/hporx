import styled from "styled-components";
import followUs from '../../../assets/followUs.svg'

export const MainContainerFollowUs = styled.div`
background-image: url(${followUs}) ;
height: 100%;
background-size: cover;
  background-repeat: no-repeat;

`
export const FollowUsMain = styled.div`
h3{
font-size: 2.4rem;
font-style: normal;
font-weight: 500;
line-height: 3.6rem;
letter-spacing: 0em;
color: #FFFFFF;

}

`
export const FollowUsImgContainer = styled.div`
text-align: center;
p{
    margin-top: 1.2rem;
font-size: 1.3rem;
font-style: normal;
font-weight: 500;
line-height: 1.2rem;
letter-spacing: 0em;
color: #FFFFFF;

}

`
export const FollowUsImg = styled.img`
height: 4.1rem;
`