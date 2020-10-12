import {useState, useContext} from 'react';
import About from "./About";
import ProjectsExpanded from "./Projects/ProjectsExpanded";
import Waves from '../Waves'
import SlickCarousel from "./Projects/SlickCarousel";
import ExpandButton from "./Projects/Expand"

import MiscContext from '../MiscContext'


export default function Content()  {
    
const {theme} = useContext(MiscContext); 
const [expand, setExpand] = useState(false);   
    return (
        <main className={theme? "main-dark": "main-light"} >
            <About/>

            <div id="projects">
                <div className="projects-header">
                    <h2 className="section-title">Projects</h2>
                    <SlickCarousel/>
                    <ExpandButton setExpand={setExpand} expand={expand}/>
                    <Waves wavesClass="carousel-waves"/>
                </div>
                {expand && <ProjectsExpanded/>}
            </div>

        </main>
    );
};

