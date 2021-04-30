import React from 'react';

export default function ProjectCard ({title, desc, link, image}){
  return (
    <div className='card'>
      <img src={image} alt="project"/>
      <div className="content">
        <h2>{title}</h2>
        <p>{desc}</p>
        <a href={link} target='_blank' rel="noopener noreferrer">View</a>
      </div>
    </div>
  );
}

