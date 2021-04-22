import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
       <ProjectsContainer id='projects'>
           <ProjectSection>
               <Title>
                   Projects
                   </Title>
                   <h1>my latest work</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident nobis ullam magni necessitatibus numquam a esse reprehenderit libero ipsum.</p>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, sed?</p>
                    <Work>
                {/* this will be mapped over later */}
                <ProjectCard>
                    {/* <h2>Sleak</h2>
                    <img src={sleak} alt='sleak'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quos.</p> */}
                </ProjectCard>
                <Project>
                    {/* <h2>Event Planner</h2>
                   <img src={event} alt="event planner"/>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quos.</p> */}
                </Project>
                <Project>
                    {/* <h2>Saltinator</h2>
                    <img src={salt} alt="saltinator"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quos.</p> */}
                </Project>
                
           </Work>
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
height: 45em;
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
height: 5em;
background: #53195f;
color: white;
font-size: 2.5em;
font-weight: 800;
line-height: 1em;
overflow: hidden;
z-index: -1;
`;

const Work = styled.div`
display: flex;
justify-content: center;
/* margin-top: .5em; */
width: 98vw;
height: 70%;
/* border: 1px solid red; */

`;

const Project = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 1rem;
width: 33.3%;
height: 100%;
> img {
    width: 75%;
    max-height: 75%;
}
> h2 {
    margin: 0 .5rem;
}

> p {
    text-align: center;
}
/* border: 1px solid red; */
`;
