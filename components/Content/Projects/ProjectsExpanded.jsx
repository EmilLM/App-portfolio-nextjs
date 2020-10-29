
import Project from "./Project";
import projects from "../../../projectsData"
import {useRef, useEffect} from "react"

const ProjectsExpanded = () => {

    const projectRef = useRef();

    useEffect( ()=> {
        
        const scrollToRef = () => projectRef.current?.scrollIntoView({ behavior: 'smooth' });
        scrollToRef();
    }, [])
    
    return ( 
        <div ref={projectRef}>
            {projects.map(project => {
                return (
                    <Project key={project.id} project={project} />
                )
            })}   
        </div>           
    );
}
 
export default ProjectsExpanded;