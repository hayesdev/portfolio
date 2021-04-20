import React from 'react'
import styled from 'styled-components'

function About() {
    return <AboutContainer>
            <AboutSection>
                <VideoContainer>
                    Video goes here
                </VideoContainer>
                <Title>About</Title>
                <h1>solutions tailored for you</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsum assumenda quo incidunt expedita aliquid. Reiciendis esse ea enim? Expedita mollitia accusantium asperiores eligendi. Impedit!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</p>
            </AboutSection>
            <Sidebar>
                <div>Build Visually Stunning Content</div> 
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
width: 100%;
height: 50%;
border: 1px solid red;
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
align-items: space-around;
width: 33.33%;
height: 100%;
background: #7a248b;
/* background:#46467b; */
color: white;
font-size: 2.5em;
font-weight: 800;
`;