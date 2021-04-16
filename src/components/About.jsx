import React from 'react'
import styled from 'styled-components'

function About() {
    return <AboutContainer>

            <AboutSection>About</AboutSection>
            <AboutSidebar>I Build Content </AboutSidebar>    

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
width: 75%;
height: 100%;
`;

const AboutSidebar = styled.div`
display: flex; 
width: 25%;
height: 100%;
background-color: rgb(84 6 123 / 0%);
/* color: white; */
border: 1px solid red;
`;