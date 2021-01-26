import AboutInfo from './AboutInfo';

const About = ({children}) => {
    
    return ( 
        <div className="about-bg" id="about">
            <div className="content-container about-content ">
               <AboutInfo/>
            </div>
            {children}
        </div>
    );
}
 
export default About;