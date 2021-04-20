import React from 'react'
import styled from 'styled-components'
import image from "../shooting_star_mountains.jpg";


function Parallax() {
    return (
        <ParallaxContainer>
          <SlideTitle>
 stuff goes here
          </SlideTitle>
        </ParallaxContainer>
    )
}

export default Parallax

const ParallaxContainer = styled.div`
display: flex;
align-items: center;
background-image: url(${image});
min-height: 500px;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
`;

const SlideTitle = styled.div`
display: flex;
font-size: 3rem;
font-family: Ubuntu;
justify-content: center;
align-items: center;
width: 100%;
height: 10rem;
border: 1px solid red;
`;
