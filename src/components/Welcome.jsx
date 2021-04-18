import React from 'react'
import styled from "styled-components";
import image from "../shooting_star_mountains.jpg";

function Welcome() {
    return (
        <WelcomeWrapper>
                <TitleWrapper>
                    <TitleTransform>
                        HAYESDEV
                        </TitleTransform>
                        <Title>
                             Digital Sherpa
                        </Title>
                       
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
  height: 50em;
  z-index:2;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
    height: 25em;
    color: white;
    border: 1px solid white;
`;

const TitleTransform = styled.div`
width: 10%;
height: 10%;
transform:rotate(-90deg);
border: 1px solid red;
`;

const Title = styled.div`
width: 50%;
height: 65%;
border: 1px solid red;
`;