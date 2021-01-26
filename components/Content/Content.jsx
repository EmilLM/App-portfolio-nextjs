import {useState, useContext} from 'react';
import About from "./About";
import ProjectsExpanded from "./Projects/ProjectsExpanded";
import Waves from '../Waves'
import SlickCarousel from "./Projects/SlickCarousel";
import ExpandButton from "./Projects/Expand"
import MiscContext from '../MiscContext';

import { Flip, Fade } from "react-awesome-reveal";
export default function Content()  {
    
const {theme} = useContext(MiscContext); 
const [expand, setExpand] = useState(false);  

    return (
        <main className={theme? "main-dark": "main-light"} >
            <About>
                <Waves wavesClass={"about-waves"} />
            </About>

            <div id="projects">
                <div className="projects-header">
                    <Flip direction="vertical" triggerOnce>
                        <h2 className="section-title">Projects</h2>
                    </Flip>
                    
                    <SlickCarousel/>

                    <Fade direction="down" triggerOnce>
                        <ExpandButton setExpand={setExpand} expand={expand} />
                    </Fade>
                    <Waves wavesClass="carousel-waves"/>
                </div>
                {expand && <ProjectsExpanded />}
            </div>

        </main>
    );
};

