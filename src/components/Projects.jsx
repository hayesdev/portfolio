import React from 'react'
import styled from 'styled-components'

function Projects() {
    return (
       <ProjectsContainer>
           <ProjectSection>
               <Title>
                   Projects
                   </Title>
                   <h1>my latest work</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident nobis ullam magni necessitatibus numquam a esse reprehenderit libero ipsum.</p>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, sed?</p>
               </ProjectSection>
           <Sidebar>
               <div>get a quote</div>
               <div>now</div>
           </Sidebar>
       </ProjectsContainer>
    )
}

export default Projects

const ProjectsContainer = styled.div`
display: flex;
width: 100vw;
height: 15em;
`;

const ProjectSection = styled.div`
display: flex;
flex-direction: column;
width: 66.66%;
height: 100%;
> h1, p {
    margin: .5rem .75rem;
}

> p {
    text-transform: none;
}
`;

const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 4.5rem;
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
background: #7a248b;
color: white;
font-size: 2.5em;
font-weight: 800;
line-height: 1em;
`;