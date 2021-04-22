import React from 'react'
import styled from 'styled-components'

const Project = (title, pic, desc) => {
    return (
        // this can map over projects array, for now will hardcode
        <ProjectCard>
            {pic}
           {title} 
        </ProjectCard>
    )
}

export default Project

const ProjectCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 33.3%;
height: 50%;
/* border: 1px solid red; */
`;
