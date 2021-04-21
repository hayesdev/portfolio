import React from 'react'
import styled from "styled-components";
import image from "../shooting_star_mountains.jpg";

function Welcome() {
    return (
        <WelcomeWrapper>
                <TitleWrapper>
                    {/* <TitleTransform>
                        <p>development</p>
                        </TitleTransform> */}
                        <Title>
                            <h1>Gregory Hayes</h1>
                            {/* developer designer digital sherpa */}
                            <h1 style={{color: '#e2e606'}}> Digital Sherpa</h1>
                        </Title>
                        <NavWrapper>
                            <Nav>
                            <h1><a href="#">welcome</a></h1>
                            <h1><a href="#">about</a></h1>
                            <h1><a href="#">projects</a></h1>
                            <h1><a href="#">contact</a></h1>
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
width: 30%;
height: 28rem;
/* border: 1px solid red; */
`;

const Nav = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2rem;
margin-right: 1rem;
width: 100%;
height: 28rem;
background: #e2e606;
color: #372441;
> h1 {
    margin: 0 2.5rem;
}
> h1 > a {
        text-decoration: none;
    }
    a:visited {
        color: #372441;
    }
`;
