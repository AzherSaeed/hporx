import styled from "styled-components";

const NavIcon = styled.img`
height: 2rem;
margin-left: 2rem;  
`
const NavLogo = styled.img`
height: 3.5rem;
`
const TopNavBarContainer = styled.div`
    .nav-link{
        color:  white !important;
        font-size: 1.6rem;
        &:not(:last-child){
            padding-right: 2rem;
        }
    }
`

export { NavIcon, NavLogo, TopNavBarContainer }