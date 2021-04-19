import React from 'react'
import styled from 'styled-components'
import image from "../shooting_star_mountains.jpg";


function Parallax() {
    return (
        <ParallaxContainer>
            stuff
        </ParallaxContainer>
    )
}

export default Parallax

const ParallaxContainer = styled.div`
background-image: url(${image});
min-height: 500px;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;
