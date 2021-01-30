import Project from './Project';
import projectsData from '../../projectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleLeft, faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons';

const ProjectsSlider = ({theme}) => {
    
    return (
        <div className="v4-slider">
            <div className="v4-slide-wrapper">
                {projectsData.map( project => <Project project={project} key={project.id} />)}
            </div>
            <button className={`prev-slide ${theme && 'prev-slide-dark'}`} >
                <FontAwesomeIcon icon={faAngleLeft}/>
            </button>
            <div className={`next-slide ${theme && 'next-slide-dark'}`}> 
                <FontAwesomeIcon icon={faAngleRight}/>
            </div> 
        </div>
    );
}
 
export default ProjectsSlider;