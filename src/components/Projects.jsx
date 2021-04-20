import React from 'react'
import styled from 'styled-components'

function Projects() {
    return (
       <ProjectsContainer>
           <ProjectSection>
               Projects
               </ProjectSection>
           <Sidebar>
               Get a quote now
           </Sidebar>
       </ProjectsContainer>
    )
}

export default Projects

const ProjectsContainer = styled.div`
display: flex;
width: 100vw;
height: 28em;
`;

const ProjectSection = styled.div`
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
color: white;
font-size: 2.5em;
font-weight: 800;
`;