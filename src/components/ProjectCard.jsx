import React from 'react';

export default function ProjectCard ({title, desc, link, image}){
  return (
   <div className='card'>
    <img src={image} alt="project image"/>
    <div className="content">
      <h2>{title}</h2>
      <p>{desc}</p>
      <a href={link}>View</a>
    </div>
     </div>
  );
}

