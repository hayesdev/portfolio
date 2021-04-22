import React from 'react'
import styled from 'styled-components'
import ProjectCard from './Project'
import {data} from './data'
import sleak from '../sleak_screenshot.PNG'
import salt from '../saltinator_screenshot.PNG'
import event from '../event_planner_screenshot.PNG'

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
               <Project>
                  <img src={sleak} alt='sleak'/>
               </Project>
               <Project>
                   <img src={salt} alt="saltinator"/>
               </Project>
               <Project>
                  <img src={event} alt="event planner"/>
               </Project>
            {/* {data.map((title, desc, link, pic)=> {
              return  <ProjectCard title={title} desc={desc} link={link} pic={pic} />
            })} */}
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
height: 40em;
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
/* flex-wrap: wrap; */
margin-top: 2em;
width: 100vw;
height: 95%;
/* border: 1px solid red; */
`;

const Project = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30%;
height: 50%;
> img {
    width: 100%;
    height: 100%;
    margin: 1em;
}
/* border: 1px solid red; */
`;