import React from 'react';
import Project from "../Project";
import {projects} from "../../data/projects";
import '../../styles/Portfolio.css';
import '../../styles/Section.css';

export default function Portfolio() {
  return (   
    <section className="section">
      <header>Portfolio</header>
      <div className="content portfolio-container">        
        { projects && projects.map((project) => (
          <Project project={project} />
        ))}     
    </div>
  </section>
  );
}
