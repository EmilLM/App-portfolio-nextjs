import {Button, Card} from 'ui-neumorphism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import projectsData from "../../projectsData";
import MiscContext from '../../components/MiscContext';
import {useContext} from "react";
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

const Project = ({project}) => {

    const {src, link, sourceLink, title, description, stack} = project;
    const {theme} = useContext(MiscContext);

    const bgImage = {
        "--backgroundImage": `url(/assets/${src})`
    }
    return (
        <div  className="v4-project v4-container">

            <div className={`v4-card ${theme?"dark-deep-engrave":"light-deep-engrave"}`}>
                <Card className='card-content' dark={theme} style={bgImage}>
                    
                    <div className='info'>
                        <h1 className='title light-h-e'>{title}</h1>
                        <p className='v4-description '>{description}</p>
                        <p className="v4-stack">{stack}</p>
                        <div className="project-links">
                      
                            <a href={link} target="_blank" rel="noopener noreferrer" id="demo">
                                <FontAwesomeIcon icon={faLaptopCode}/> &nbsp; Demo
                            </a>  
                         
                                <a href={sourceLink} target="_blank" rel="noopener noreferrer" id="source">
                                <FontAwesomeIcon icon={faGithubSquare}/>&nbsp; Source
                                </a>
                         
                            
                        </div>
                    </div>
                </Card>
            </div>
            
        </div>
    );
}
 
export default Project;