import React from 'react'
import styled from 'styled-components'
import image from "../assets/purple-mountain-1280.jpg";



function ParallaxOne() {
    return (
        <ParallaxContainer className='parallax'>
          <SlideTitle>
 <p> Photos courtesy of <a href="http://www.unsplash.com" target="_blank" rel="noreferrer noopener"> Unsplash</a></p>
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
min-height: 50em;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
`;

const SlideTitle = styled.div`
display: flex;
font-size: 2.5em;
font-family: 'Chivo', sans-serif;
text-transform: none;
font-weight: 700;
justify-content: center;
align-items: center;
width: 100%;
height: 10rem;
> p > a {
  color: #e2e606;
  text-decoration: none;
}
a:hover {
  color: #46467b;
}
@media (max-width: 600px) {
  font-size: 1.5em;
}
/* border: 1px solid red; */
`;
