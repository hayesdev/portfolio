import React from 'react'
import styled from 'styled-components'

import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import { AppContext, useGlobalContext } from "./context";
import Sidebar from "../components/Sidebar";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
        <MainHeader>  
          <MenuOpenRoundedIcon onClick={openSidebar} />
          <Sidebar />
      </MainHeader>
    )
}

export default Navbar

const MainHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  position: fixed;
  height: 2rem;
  width: 100vw;
  z-index: 2;
  font-family: "Cuprum", sans-serif;

 a:visited {
    color: #372441;
  }

a:hover {
  color: #e2e606;
}

  > .MuiSvgIcon-root {
      font-size: 2.7em;
      margin-right: 1em;
      margin-top: .5em;

      &:hover {
        color: #e2e606;
        cursor: pointer;
        transition: .25s;
      }
  }
`;

const Wrapper = styled.div`
display: flex;
  justify-content: flex-end;
  align-items: center;
  
  > h1 {
    text-align: center;
    font-size: 1em;
    margin: 0 1.75rem;
    
    border-radius: 5px;
    height: 1.2em;
    width: 4em;


    @media (max-width: 400px) {
      margin: 0 1rem;
    }
  }

  > h1 > a {
      cursor: pointer;
      text-decoration: none;
    }
`;