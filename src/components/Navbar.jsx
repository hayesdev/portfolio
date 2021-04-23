import React from 'react'
import styled from 'styled-components'
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
    return (
        <MainHeader>
        <MenuIconContainer>
          <MenuIcon onClick={()=> {console.log('clicked')}}/>
        </MenuIconContainer>
        <HeaderTitle>HayesDev</HeaderTitle>
      </MainHeader>
    )
}

export default Navbar

const MainHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 5rem;
  width: 100vw;
  /* border: 1px solid white; */
`;

const MenuIconContainer = styled.div`
  margin-top: .5em;
  margin-right: 1em;
  > .MuiSvgIcon-root {
    font-size: 2.5em;
    color: white;
    :hover {
        cursor: pointer;
        color: #46467b;
    }
  }
`;

const HeaderTitle = styled.div`
  /* height: 40px;
  width: 90px; */
  transform: rotate(-90deg);
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 2.5em;
  /* border: 1px solid white; */
`;
