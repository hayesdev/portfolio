import React from 'react'
import styled from 'styled-components'
import image from "../shooting_star_mountains.jpg";


function ParallaxOne() {
    return (
        <ParallaxContainer>
          <SlideTitle>
 <p>Courtesy of  <a href="#"> Unsplash</a></p>
          </SlideTitle>
        </ParallaxContainer>
    )
}

export default ParallaxOne;

const ParallaxContainer = styled.div`
display: flex;
width: 100vw;
align-items: center;
background-image: url(${image});
min-height: 600px;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
`;

const SlideTitle = styled.div`
display: flex;
font-size: 3rem;
font-family: 'Chivo', sans-serif;
text-transform: none;
font-weight: 400;
justify-content: center;
align-items: center;
width: 100%;
height: 10rem;
/* border: 1px solid red; */
`;
