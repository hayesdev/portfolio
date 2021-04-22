import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { Link as Scroll } from "react-scroll";
import image from "../shooting_star_mountains.jpg";
import {data, titles}  from './data'


function Welcome() {
    const [names, setNames] = useState(titles)
    const [index, setIndex] = useState(0);
   
    useEffect(() => {
        const lastIndex = names.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, names]);
    
      useEffect(() => {
        /// storing interval value to pass thru cleanup function
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 3000);
        // clearInterval is a cleanup function that resets interval to new value
        return () => clearInterval(slider);
      }, [index]);

    return (
        <WelcomeWrapper id='welcome'>
                <TitleWrapper>
                    {/* <TitleTransform>
                        <p>development</p>
                        </TitleTransform> */}
                        <Title>
                            <h1>Gregory Hayes</h1>
                            <div className="section-center">
        {names.map((name, titleIndex) => {
          const { title} = name;
          let position = "nextSlide";
          if (titleIndex === index) {
            position = "activeSlide";
          }
          if (
            titleIndex === index - 1 ||
            (index === 0 && titleIndex === names.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={titleIndex} className={position}>
                <h1 style={{color: '#e2e606'}}>{title}</h1>
            </article>
          );
        })}
        </div>
                            
                          
                        </Title>
                        <NavWrapper>
                            <Nav>
                            <h1><Scroll to='welcome' smooth={true}>Welcome</Scroll></h1>
                            <h1><Scroll to='about' smooth={true}>about</Scroll></h1>
                            <h1><Scroll to='projects' smooth={true}>projects</Scroll></h1>
                            <h1><Scroll to='contact' smooth={true}>contact</Scroll></h1>
                            </Nav>  
                        </NavWrapper>  
                </TitleWrapper>
        </WelcomeWrapper>
    )
}

export default Welcome

const WelcomeWrapper = styled.div`
  display: flex;
  background: url(${image});
  background-size: cover;
  width: 100vw;
  min-height: 50em;
  z-index:2;
`;

const TitleWrapper = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    min-height: 24em;
    color: white;
    /* border: 1px solid white; */
`;

const TitleTransform = styled.div`
display: flex;
justify-content: center;
width: 15%;
height: 15%;
transform:rotate(-90deg);
border: 1px solid red;
> p {
font-weight: 400;
}
`;

const Title = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 2rem;
font-family: 'Chivo', sans-serif;
font-weight: 900;
text-transform: none;
width: 66.6%;
height: 65%;
/* border: 1px solid red; */
> h1 {
    margin: 0;
}
`;

const NavWrapper = styled.div`
display: flex;
width: 25%;
height: 28rem;

`;

const Nav = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2rem;
margin-left: 1.5rem;
width: 100%;
height: 25rem;
background: #e2e606;
color: #372441;
> h1 {
    margin: 0 2.5rem;
}
> h1 > a {
        cursor: pointer;
        text-decoration: none;
    }
   
    a:visited {
        color: #372441;
    }

    a:hover {
  color: #46467b;
}
`;
