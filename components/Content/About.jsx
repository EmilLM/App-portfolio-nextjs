
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTools, faPencilAlt, faDatabase, faDesktop } from '@fortawesome/free-solid-svg-icons'
import Waves from "../Waves";
import { Fade, Flip, JackInTheBox } from "react-awesome-reveal";

import MiscContext from "../MiscContext"
import {useContext} from "react"

const About = () => {
    const {animate} = useContext(MiscContext);
    return ( 
        <div className="about-bg" id="about">
            <div className="content-container about-content ">
                <h2 className="section-title">About</h2>
                
                <Fade direction="left">
                <div className="about-code">
                    
                        <p><span>Name :</span> 'Luchian Emil Moise', </p>
                        <p><span>Specialization :</span> 'Full stack web dev',</p> 
                        <p><span>Stack :</span> 'MongoDB-Express-React-Node',</p>
                        <p><span>Location :</span> 'Bucharest, Romania'</p>
                   
                </div>
                 </Fade>
                 
                <Fade direction="right">
                <button
                    className="btn btn-primary"
                    href="/assets/CV_Luchian_Emil.pdf"
                    download="CV_Luchian_Emil.pdf"
                >
                    <FontAwesomeIcon icon={faDownload} />
                    Download CV
                </button>
                </Fade>
                <Flip direction="horizontal" cascade>
                <p className="about-info">
                    Learned the ropes of front-end programming at <span><a href="https://www.coderslab.ro/">Coder's Lab</a></span>. Learned the <span>MERN stack</span> and currently studying technologies like GraphQL, Jest, Docker and other.
                </p>
                <p className="about-info">
                    Striving to write clean and scalable code using best practices. <span>Efficient </span>and 
                    <span> resourceful</span> in reaching my objectives, in bringing code to life in <span>amazing designs</span>. 
                   
                </p>
                </Flip>
                
                <h3>Skills</h3>
                <JackInTheBox cascade>
                <div className="about-skills">
                    <div className="skills-container">
                        <div className="skills-ui skills-card">
                            <FontAwesomeIcon icon={faPencilAlt} />
                            <strong>UI/UX</strong>
                            <ul>
                                <li>Html5</li>
                                <li>Css3/Scss</li>
                                <li>Photoshop</li>
                                <li>Adobe XD</li>
                            </ul>
                        </div>
                        <div className="skills-frontend skills-card">
                            <FontAwesomeIcon icon={faDesktop} />
                            <strong>Front-end</strong>
                            <ul>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Material-UI</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-container">
                        <div className="skills-backend skills-card">
                            <FontAwesomeIcon icon={faDatabase} />
                            <strong>Back-end</strong>
                            <ul>
                                <li>MongoDB</li>
                                <li>Express.js</li>
                                <li>Node.js</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                        <div className="skills-tools skills-card ">
                            <FontAwesomeIcon icon={faTools} />
                            <strong>Tools</strong>
                            <ul>
                                <li>Jest</li>
                                <li>Git/Github</li>
                                <li>GraphQL</li>
                                <li>REST API</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </JackInTheBox>
            </div>
            <Waves wavesClass={"about-waves"} />
        </div>
    );
}
 
export default About;