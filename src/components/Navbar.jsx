import React from 'react'
import styled from 'styled-components'
import { Link as Scroll } from "react-scroll";
// import {FaAngleDown} from 'react-icons/fa'

const Navbar = () => {
    return (
        <MainHeader>
          <h1><Scroll to='welcome' smooth={true} isDynamic={true} duration={1000}>Welcome</Scroll></h1>
          <h1><Scroll to='about' smooth={true} isDynamic={true} duration={1000}>About</Scroll></h1>
          <h1><Scroll to='projects' smooth={true} isDynamic={true} duration={1000}>projects</Scroll></h1>
          <h1><Scroll to='contact' smooth={true} isDynamic={true} duration={1000}>contact</Scroll></h1>
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
  background: linear-gradient(-45deg, #3282d4, #614add,  #5a3caa);
  height: 2rem;
  width: 100vw;
  z-index: 3;
  > h1 {
    font-size: 1em;
    margin: 0 1.75rem;
}
> h1 > a {
        cursor: pointer;
        text-decoration: none;
    }
    a:visited {
        color: #372441;
    }
    a:hover {
  color: #e2e606;
}
@media (max-width: 768px) {
  justify-content: center;

}
`;

