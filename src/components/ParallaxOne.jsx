import React from 'react'
import styled from 'styled-components'
// import image from "../shooting_star_mountains.jpg";
import image from "../mountain_horizon.jpg";


function ParallaxOne() {
    return (
        <ParallaxContainer className='parallax' style={{}}>
          <SlideTitle>
 <p> Photos courtesy of  <a href="http://www.unsplash.com"> Unsplash</a></p>
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
min-height: 500px;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
`;

const SlideTitle = styled.div`
display: flex;
font-size: 1.5rem;
font-family: 'Chivo', sans-serif;
text-transform: none;
font-weight: 700;
justify-content: center;
align-items: center;
width: 100%;
height: 10rem;
> p > a {
  text-decoration: none;
}
a:hover {
  color: #46467b;
}
/* border: 1px solid red; */
`;
