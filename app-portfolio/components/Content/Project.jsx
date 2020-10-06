import React from 'react';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import Waves from "../Waves"
import MiscContext from "../MiscContext"

const Project = ({project}) => {

    const {id, src, link, source, altText, title, description, stack, sectionTitle, wavesClass} = project;
    const {animate} = React.useContext(MiscContext)

    return ( 
        <div className="project-container">
             <LazyLoad height={150} offset={100}>
                <div className="content project">
                    {sectionTitle &&<h2 className="section-title">{sectionTitle}</h2>}
                    <h3> &lt; {title} /&gt;</h3>
                    <img className="appImage" src={`/assets/${src}`} alt={altText}/>
                    <div className="description">
                        <p>{description}</p>
                        <strong>{stack}</strong>
                        <div className="iconLinks">
                            <a href={link} target="_blank" rel="noopener noreferrer" id="demo">
                                <FontAwesomeIcon icon={faLaptopCode}/>   Demo
                            </a>   
                            <a href={source} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare}/>  Source
                            </a>
                        </div>
                    </div>                      
                </div> 
            </LazyLoad>  
            <Waves animate={animate} wavesClass={wavesClass}/>
        </div>
     );
}
 
export default Project;