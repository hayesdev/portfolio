import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import {data} from './data'



function Projects() {
    return (
       <ProjectsContainer id='projects'>
           <ProjectSection>
               <Title>Projects</Title>
                <h1>my latest work</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident nobis ullam magni necessitatibus numquam a esse reprehenderit libero ipsum.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sed!</p>
                 
            
           <Sidebar>
               <div>get a quote</div>
               <div>now</div>
           </Sidebar> 
           </ProjectSection>
           <Project>  {data.map((project, index)=> {
                        const {title, desc, link, image} = project;
                        return <ProjectCard key={index} title={title} desc={desc} link={link} image={image}/>
                       
                    })} </Project> 
       </ProjectsContainer>
    )
}

export default Projects

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50em;

    @media (max-width: 1450px) {
      height: auto;
    }
`;

const ProjectSection = styled.div`
    display: flex;
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

    @media (max-width: 768px) {
        display: none;
    }
`;

const Project = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    > p {
        margin-left: 0;
    }
`;
