import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import { Link as Scroll } from "react-scroll";
import {data} from './data'



function Projects() {
    return (
       <ProjectsContainer id='projects'>
           <ProjectSection>
               <TitleWrapper>
               <Title>Projects</Title>
                <h1>my latest work</h1>
                <p>Take a look below to see some of my latest projects. I also have experience building back-ends with Node.js, Express, and SQL to create full-stack applications. I'm passionate about learning, and love finding new ways to build web apps that don't just look great, but actually work!</p>
                <p>I believe that no project is ever truly <i>'done'</i>, but here are my most recent and optimized builds for your browsing enjoyment!</p>
           </TitleWrapper>
           <Sidebar>
           <Scroll to='contact' smooth={true} isDynamic={true} duration={1000} offset={-30}>
              get a quote </Scroll>
               {/* <div> now</div> */}
           </Sidebar> 
           </ProjectSection>
           <Project>  
               {data.map((project, index)=> {
                    const {title, desc, link, image} = project;
                    return (
                    <ProjectCard key={index} title={title} desc={desc} link={link} image={image}/>
                        )
                    })
                } 
            </Project> 
       </ProjectsContainer>
    )
}

export default Projects

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
    background: #f1f1fa;

    @media (max-width: 1350) {
        flex-wrap: wrap;
    }
`;

const ProjectSection = styled.div`
    display: flex;
    width: 100%;
    height: 30%;

    @media (max-width: 885px) {
        flex-direction: column;
    } 
`;
const TitleWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 66.6%;
    /* border: 1px solid red; */

    > h1 {
        font-size: 2em;
    }

    > h1, p {
        margin: .5rem .75rem;
    }

    > p {
        font-family: 'Chivo', sans-serif;
        font-weight: 200;
        font-size: 1.15em;
        text-transform: none;
    }

    @media (max-width: 885px) {
        width: 100%;;
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

    a:hover {
      cursor: pointer;
      color: #e2e606;
    }

    @media (max-width: 885px) {
        flex-direction: row;
        width: 100%;;
    } 
`;

const Project = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    min-height: 60%;

    > p {
        margin-left: 0;
    }
    /* border: 1px solid red; */
`;
