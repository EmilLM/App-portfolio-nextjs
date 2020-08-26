import React from 'react';
// import fullCV from '../../assets/CV_Luchian_Emil.pdf'

const About = () => {
    return ( 
        <div className={'diagonal-box bgAbout'} id="about">
            <div className="content about">
                <h1 className="sectionTitle">About</h1>
                
                <div className="aboutCode">
                    <p><span>Name :</span> 'Luchian Emil Moise', </p>
                    <p><span>Specialization :</span> 'Full stack MERN web dev',</p> 
                    <p><span>Stack :</span> 'MongoDB-Express-React-Node',</p>
                    <p><span>Location :</span> 'Bucharest, Romania'</p>
                </div>
               
                <p>
                    Learned the ropes of front-end programming at <span>Coder's Lab</span>, an intensive coding program, <br/>then started 
                    learning the <span>MERN stack</span>, for when I'll need to develop the awesome app idea I'm going
                    to have, aaanytime now.
                </p>
                <p>
                    I'm eager to prove my coding skills and excited for new challenges.
                    Efficient and resourceful in achieving my objectives, in bringing code to life in amazing designs. 
                    <br/><span>(Now with a back-end, if needed)</span>
                </p>
                <div className="sub">Main stack:</div>
                <i>
                    HTML5, CSS3, Javascript, Scss, React, Next.js, Node, Express, MongoDB, <br/> Bootstrap4, Material-UI
                </i>
                <a href="/assets/CV_Luchian_Emil.pdf" download="CV_Luchian_Emil.pdf"> Download CV</a>
            </div>
            
        </div>
    );
}
 
export default About;