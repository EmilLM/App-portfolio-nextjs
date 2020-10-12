import React from 'react';
import Project from "./Project";
import projects from "../../../projectsData"


const ProjectsExpanded = () => {
    return ( 
        <>
            {projects.map(project => {
                return (
                    <Project key={project.id} project={project} />
                )
            })}   
        </>           
    );
}
 
export default ProjectsExpanded;