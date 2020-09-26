
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return ( 
        <div className={'diagonal-box bgAbout'} id="about">
            <div className="content about">
                <h1 className="sectionTitle">About</h1>
                
                <div className="about-code">
                    <p><span>Name :</span> 'Luchian Emil Moise', </p>
                    <p><span>Specialization :</span> 'Full stack web developer',</p> 
                    <p><span>Stack :</span> 'MongoDB-Express-React-Node',</p>
                    <p><span>Location :</span> 'Bucharest, Romania'</p>
                </div>
               
                <p className="about-info">
                    Learned the ropes of front-end programming at <span><a href="https://www.coderslab.ro/">Coder's Lab</a></span>. Self-learned
                    the <span>MERN stack</span> and currently practicing technologies like GraphQL, Jest, Docker <br />with more to follow.
                </p>
                <p className="about-info">
                    Eager to prove my abilities and excited for new challenges.
                    Efficient and resourceful in reaching my objectives, in bringing code to life in amazing designs. 
                    <br/><span>(Now with a solid back-end to boot.)</span>
                </p>
                <div className="about-skills">Main stack:</div>
                <i>
                    HTML5, CSS3, Javascript, Scss, React, Next.js, Node, Express, MongoDB, <br/> Bootstrap4, Material-UI
                </i>
                <button 
                    className="btn btn-primary"
                    href="/assets/CV_Luchian_Emil.pdf" 
                    download="CV_Luchian_Emil.pdf"
                >
                    <FontAwesomeIcon icon={faDownload} />
                    Download CV
                </button>
            </div>
            
        </div>
    );
}
 
export default About;