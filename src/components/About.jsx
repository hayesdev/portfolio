import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import "../App.css";

function About() {
    return <AboutContainer id='about'>
            <AboutSection>
                {/* <VideoContainer>
                        <ReactPlayer  
                        playing= {true}
                        muted= {true}
                        loop={true}                   
                         config={{
                             youtube: {
                                playerVars: {
                                    loop: 1,
                                    controls: 0,
                                    rel: 0,
                                    end: 220,
                                   
                                }
                             }
                   }}
                 url='https://www.youtube.com/watch?v=rmRV6o3Tx_4&ab_channel=MotionstockMotionstock'/>                                        
                </VideoContainer> */}
                <Title>About</Title>
                <h1>solutions tailored for you</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsum assumenda quo incidunt expedita aliquid. Reiciendis esse ea enim? Expedita mollitia accusantium asperiores eligendi. Impedit!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</p>
            </AboutSection>
            <Sidebar>
                <div>Visually stunning</div> 
                <div>content built</div>
                <div>with:</div>
                <Skills>
                <p>html css less javascript</p>
                <p>react react-router redux</p>
                <p>next. js tailwind.css sass</p>
                <p>styled-components flexbox</p>
                </Skills>
            </Sidebar>    
    </AboutContainer>
}

export default About

const AboutContainer = styled.div`
display: flex;
width: 100vw;
height: 30em;
`;

const AboutSection = styled.div`
display: flex;
flex-direction: column;
width: 66.66%;
height: 100%;
font-size: 1em;
> h1, p {
    margin: .5rem .75rem;
}

> p {
    text-transform: none;
}
`;

const VideoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
width: 100%;
height: 50%;
overflow: hidden;

`;

const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 4rem;
height: 2rem;
margin: 1em 0 1em 1em;
font-weight: 600;
color: white;
background: #46467b;
border-radius: 10px;

`;

const Sidebar = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
width: 33.33%;
height: 100%;
background: #53195f;
/* background:#46467b; */
color: white;
font-size: 2.5em;
font-weight: 800;
line-height: 1em;
`;

const Skills = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.2rem;
font-weight: 200;
font-family: 'PT Sans', sans-serif;
margin-top: 2em;
width: 100%;
height: 40%;
> p {
    line-height: .25em;
}

`;