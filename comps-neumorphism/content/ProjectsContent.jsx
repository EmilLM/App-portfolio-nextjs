import {Card, Divider} from "ui-neumorphism";
import ProjectsSlider from "./ProjectsSlider";
import {useContext} from "react";
import MiscContext from "../../components/MiscContext";


const ProjectsContent = () => {
    const {theme} = useContext(MiscContext);
    return (
        <>
            <Divider dark={theme}/>
            <Card flat className="v4-container v4-projects" dark={theme}>
                <h2 className={theme?"dark-h-e":"light-h-e"}>Projects</h2>
                <ProjectsSlider theme={theme}/>
            </Card> 
            <Divider dark={theme}/>
       </>
    );
}
 
export default ProjectsContent;