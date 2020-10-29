

const ProjectsHeader = ({children}) => {


    return (
        <div className="projects-header "  >
            <h2 className="section-title" >Projects</h2>
            {children}
        </div>
    );
}
 
export default ProjectsHeader;