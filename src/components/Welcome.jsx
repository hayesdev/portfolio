import React from 'react'
import styled from "styled-components";
import image from "../shooting_star_mountains.jpg";

function Welcome() {
    return (
        <WelcomeWrapper>
                <Title>
                    Digital Sherpa
                </Title>
        </WelcomeWrapper>
    )
}

export default Welcome

const WelcomeWrapper = styled.div`
  display: flex;
  background: url(${image});
  background-size: cover;
  width: 100vw;
  height: 50em;
  z-index:2;
`;

const Title = styled.div`
    display: flex;
    width: 100%;
    height: 10em;
  
    color: white;
    border: 1px solid white;
`;
