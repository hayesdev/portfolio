import React from 'react'
import styled from 'styled-components'
import { Link as Scroll } from "react-scroll";
// import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

const Navbar = () => {
    return (
        <MainHeader>  
          {/* <MenuOpenRoundedIcon /> */}
           <div >
             {/* <Scroll to='contact' smooth={true} isDynamic={true} duration={1000} offset={-30}><FaQuestion/></Scroll> */}
            
             </div>
            <Wrapper>
          <h1>
            <Scroll to='welcome' smooth={true} isDynamic={true} duration={1000}>welcome</Scroll>
          </h1>
          <h1>
            <Scroll to='about' smooth={true} isDynamic={true} duration={1000} offset={-30} >about</Scroll>
          </h1>
          <h1>
            <Scroll to='projects' smooth={true} isDynamic={true} duration={1000} offset={-30}>projects</Scroll>
          </h1>
          <h1>
            <Scroll to='contact' smooth={true} isDynamic={true} duration={1000} offset={-30}>contact</Scroll>
          </h1>
         </Wrapper>
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
  background: #53195f;
   /* linear-gradient(45deg, #3282d4, #614add,  #53195f); */
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

  /* @media (max-width: 768px) {
    justify-content: center;
  } */
  > .MuiSvgIcon-root {
      font-size: 2.7em;
      margin-right: 1em;
      margin-top: .5em;

      &:hover {
        color: #e2e606;
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