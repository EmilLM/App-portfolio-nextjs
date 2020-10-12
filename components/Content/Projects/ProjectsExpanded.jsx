
import Project from "./Project";
import projects from "../../../projectsData"


const ProjectsExpanded = () => {

    const projectRef = React.useRef();

    React.useEffect( ()=> {
        
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