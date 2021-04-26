import React from 'react'
import styled from 'styled-components'
import { Link as Scroll } from "react-scroll";
import {FaAngleDown} from 'react-icons/fa'

const Navbar = () => {
    return (
        <MainHeader>

        {/* <HeaderTitle>HayesDev</HeaderTitle> */}
          {/* <h1><Scroll to='welcome' smooth={true} isDynamic={true} duration={1000}>Welcome</Scroll></h1> */}
         
          <h1><Scroll to='about' smooth={true} isDynamic={true} duration={1000}><FaAngleDown/></Scroll></h1>
        {/* <MenuIconContainer>
          <MenuIcon onClick={()=> {console.log('clicked')}}/> 
        </MenuIconContainer> */}
          {/* <h1><Scroll to='projects' smooth={true} isDynamic={true} duration={1000}>projects</Scroll></h1>
          <h1><Scroll to='contact' smooth={true} isDynamic={true} duration={1000}>contact</Scroll></h1> */}
      </MainHeader>
    )
}

export default Navbar

const MainHeader = styled.div`
  display: flex;
  /* flex-direction: column; */
  position: absolute;
  z-index: 2;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
/* font-family: 'Chivo', sans-serif; */
  height: 5rem;
  width: 100vw;
  > h1 {
    font-size: 2.5em;
    margin: 0 2rem;
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
  /* border: 1px solid white; */
`;

// const MenuIconContainer = styled.div`
//   margin-top: .5em;
//   margin-right: 1em;
//   > .MuiSvgIcon-root {
//     font-size: 2.5em;
//     color: white;
//     :hover {
//         cursor: pointer;
//         color: #46467b;
//     }
//   }
// `;

// const HeaderTitle = styled.div`
//   /* height: 40px;
//   width: 90px; */
//   transform: rotate(-90deg);
//   font-size: 1.5em;
//   font-weight: 600;
//   margin-top: 2.5em;
//   /* border: 1px solid white; */
// `;
