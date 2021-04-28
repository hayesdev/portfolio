import React from 'react';
import styled from 'styled-components'

export default function ProjectCard ({title, desc, link, image}){
  return (
    <Card>
      <Image src={image}/>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <Link href={link} target='_blank' rel="noreferrer noopener">View</Link>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 66%;
`;

const Image = styled.img`
  width: 100%;
  height: 45%;
`;

const Title = styled.h1`
  text-align: left;
`;

const Description = styled.p`
  text-align: left;
`;

const Link = styled.a`
  text-decoration: none;
`;