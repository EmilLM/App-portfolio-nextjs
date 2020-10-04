import React from 'react';
import Project from "./Project";



const Projects = ({projects}) => {

  
    return ( 
        <div id="projects">          
            {projects.map(project => {
                return (
                    <Project key={project.id} project={project} />
                )
            })}              
        </div>
    );
}
 
export default Projects;