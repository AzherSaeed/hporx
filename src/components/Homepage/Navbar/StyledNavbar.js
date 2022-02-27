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
  background: rgba(0, 0, 0, 0.2);
  opacity: 0.9;
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

position: sticky;
top: 0;

  .subnav-main-links{
    display: flex;
    justify-content: space-between;
  }


`;



export { NavIcon, NavLogo, TopNavBarContainer, HeaderTopBar, SubBarContainer  };
