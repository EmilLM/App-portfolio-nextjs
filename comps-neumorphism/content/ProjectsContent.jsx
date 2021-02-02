import {Card, Divider} from "ui-neumorphism";
import ProjectsSlider from "./ProjectsSlider";
import {useContext} from "react";
import MiscContext from "../../components/MiscContext";
import {Flip} from "react-awesome-reveal";


const ProjectsContent = () => {
    const {theme} = useContext(MiscContext);
    return (
        <>
            <Divider dark={theme}/>
            
            <Card flat className="v4-container v4-projects" dark={theme}>
                
                <h2 className={theme?"dark-h-e":"light-h-e"}>Projects</h2>
                <Flip direction="horizontal" triggerOnce>
                <ProjectsSlider theme={theme}/>
               </Flip>
            </Card> 
            
            <Divider dark={theme}/>
       </>
    );
}
 
export default ProjectsContent;