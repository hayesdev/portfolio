import React, { useState, useEffect } from "react";
import projects from "../data/data.js";

const Projects = () => {
  const [project, setProject] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const fetchProjects = async () => {
    console.log(projects);
    setTimeout(() => {
      setProject(projects);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2>Loading...</h2>
      </section>
    );
  }

  const { name, title, duties } = project[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {projects.map((project, index) => {
            return (
              <button
                key={project.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {project.name}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{name}</h4>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Projects;
