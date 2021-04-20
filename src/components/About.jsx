import React from 'react'
import styled from 'styled-components'

function About() {
    return <AboutContainer>

            <AboutSection>About</AboutSection>
            <Sidebar><div>Build Visually Stunning Content</div> </Sidebar>    

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
width: 66%;
height: 100%;
`;

const Sidebar = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: space-around;
width: 33%;
height: 100%;
background: #7a248b;
/* background:#46467b; */
color: white;
font-size: 2.5em;
font-weight: 800;
`;