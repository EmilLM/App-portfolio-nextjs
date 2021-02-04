import React from 'react';
import Project from "./Project";
import projects from '../../projectsData';


const Projects = () => {

  
    return ( 
        <div id="projects">          
            {projects.map( (project, index) => {
                return (
                    <Project key={index}
                    id={project._id} 
                    title={project.title}
                    src={project.src}
                    link={project.link}
                    source={project.sourceLink}
                    altText={project.altText}
                    description={project.description}
                    stack={project.stack}
                    sectionTitle={project.sectionTitle}
                    />
                )
            })}              
        </div>
    );
}
 
export default Projects;