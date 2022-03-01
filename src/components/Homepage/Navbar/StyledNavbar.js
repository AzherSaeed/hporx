import styled from "styled-components";

const NavIcon = styled.img`
  height: 2rem;
  margin-left: 2rem;
`;
const NavLogo = styled.img`
  height: 3.5rem;
`;
const TopNavBarContainer = styled.div`
  .nav-link {
    color: white !important;
    font-size: 1.6rem;
    &:not(:last-child) {
      padding-right: 2rem;
    }
  }
`;
const HeaderTopBar = styled.div`
 


  .normalNavbar{
    background: rgba(0, 0, 0, 0.2);
  opacity: 0.9;
  }


  .skewNavbar{
    display: none;
    display: none;  
    position: unset;
  }

  position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;


  .mr-auto.navbar-nav {
    gap: 2rem;
    align-items: baseline;

    & > * {
      width: 33px;
      height: 33px;
    }
  }

  .header-topBar-logo {
    width: 147.05px;
    height: 51.35px;
  }
`;

const SubBarContainer = styled.div`

  .subnav-main{
    display: flex;
    justify-content: space-between;
    width: 100%;

    &> *{
      font-size: 1.4rem;
      color: white;
      font-weight: 600;
    }
  }

`;



export { NavIcon, NavLogo, TopNavBarContainer, HeaderTopBar, SubBarContainer  };
