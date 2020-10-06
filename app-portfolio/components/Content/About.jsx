
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTools, faPencilAlt, faDatabase, faDesktop } from '@fortawesome/free-solid-svg-icons'
import Waves from "../Waves"
import MiscContext from "../MiscContext"
const About = () => {
    const {animate} = React.useContext(MiscContext)
    return ( 
        <div className="about-bg" id="about">
            <div className="content about-content ">
                <h2 className="section-title">About</h2>
                
                <div className="about-code">
                    <p><span>Name :</span> 'Luchian Emil Moise', </p>
                    <p><span>Specialization :</span> 'Full stack web dev',</p> 
                    <p><span>Stack :</span> 'MongoDB-Express-React-Node',</p>
                    <p><span>Location :</span> 'Bucharest, Romania'</p>
                </div>

                <button
                    className="btn btn-primary"
                    href="/assets/CV_Luchian_Emil.pdf"
                    download="CV_Luchian_Emil.pdf"
                >
                    <FontAwesomeIcon icon={faDownload} />
                    Download CV
                </button>
               
                <p className="about-info">
                    Learned the ropes of front-end programming at <span><a href="https://www.coderslab.ro/">Coder's Lab</a></span>. Self-learned the <span>MERN stack</span> and currently studying technologies like GraphQL, Jest, Docker with more to follow.
                </p>
                <p className="about-info">
                    Eager to prove my abilities and excited for new challenges. <span>Efficient </span>and 
                    <span> resourceful</span> in reaching my objectives, in bringing code to life in <br/><span>amazing designs</span>. 
                   
                </p>
                
                <h3>Skills</h3>
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
                            <li>Git/Github</li>
                            <li>npm</li>
                            <li>GraphQL</li>
                            <li>REST API    </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            {/* <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
                <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" strokeWidth="120" strokeLinecap="round" />
            </svg> */}
            <Waves wavesClass={"about-waves"} animate={animate} />
        </div>
    );
}
 
export default About;