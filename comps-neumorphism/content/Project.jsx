import {Button, Card} from 'ui-neumorphism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import projectsData from "../../projectsData";
import MiscContext from '../../components/MiscContext';
import {useContext} from "react";

const Project = () => {
    const {theme} = useContext(MiscContext);
    return (
        <div  className="v4-project v4-container">

            <div className={`v4-card ${theme?"dark-deep-engrave":"light-deep-engrave"}`}>
                <Card className='card-content' dark={theme}>
                    
                    <div className='info'>
                        <h1 className='title'>ChatAway</h1>
                        <p className='v4-description'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
                        <div className="project-links">
                            {/* <Button > */}
                            <a href="#" target="_blank" rel="noopener noreferrer" id="demo">
                                <FontAwesomeIcon icon={faLaptopCode}/> &nbsp; Demo
                            </a>  
                            {/* </Button> */}
                            {/* <Button> */}
                                <a href="#" target="_blank" rel="noopener noreferrer" id="source">
                                <FontAwesomeIcon icon={faGithubSquare}/>&nbsp; Source
                                </a>
                            {/* </Button> */}
                            
                        </div>
                    </div>
                </Card>
            </div>
            
        </div>
    );
}
 
export default Project;