import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import {data} from './data'



function Projects() {
    return (
       <ProjectsContainer id='projects'>
           <ProjectSection>
               <Title>
                   Projects
                   </Title>
                   <h1>my latest work</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident nobis ullam magni necessitatibus numquam a esse reprehenderit libero ipsum.</p>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sed!</p>
                    <Work>
                {data.map((project, index)=> {
                    const {title, desc, link, image} = project;
                    return <Project key={index}  >
                        <ProjectCard title={title} desc={desc} link={link} image={image}/>
                    </Project> 
                })}
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
height: 50em;
@media (max-width: 1450px) {
      height: auto;
}
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

@media (max-width: 768px) {
    width: 100%;
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
height: 6em;
background: #53195f;
color: white;
font-size: 2.5em;
font-weight: 800;
line-height: 1em;
/* overflow: hidden; */
@media (max-width: 767px) {
    display: none;
}
`;

const Work = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 2.5em;
width: 100vw;
height: 100%;
/* border: 1px solid red; */
@media (max-width: 1450px) {
    flex-wrap: wrap;
    margin-top: 0;
} 

`;

const Project = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 1rem;
width: 45%;
* p {
    margin-left: 0;
}
 /* @media (max-width: 1450px) {
    flex: 345px;
    height: auto;
} */
@media (max-width: 768px) {
    height: 100%;
}
/* border: 1px solid red; */
`;
