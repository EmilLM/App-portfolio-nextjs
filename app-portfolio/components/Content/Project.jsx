import React from 'react';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'

const Project = (props) => {

    const {id, src, link, source, altText, title, description, stack, sectionTitle} = props;
    

    return ( 
        <div className={`diagonal-box bg${id}`}>
             <LazyLoad height={150} offset={100}>
                <div className="content project">
                    {sectionTitle &&<h2 className="sectionTitle">{sectionTitle}</h2>}
                    <h3> &lt; {title} &gt;</h3>
                    <img className="appImage" src={`/assets/${src}`} alt={altText}/>
                    <div className="description">
                        <p>{description}</p>
                        <strong>{stack}</strong>
                        <div className="iconLinks">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLaptopCode}/>   Demo
                            </a>   
                            <a href={source} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare}/>  Source
                            </a>
                        </div>
                    </div>                      
                </div> 
            </LazyLoad>  
        </div>
     );
}
 
export default Project;