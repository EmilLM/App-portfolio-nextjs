import {Card, Divider} from "ui-neumorphism";
import Project from "./Project";
import {useContext} from "react";
import MiscContext from "../../components/MiscContext";

const ProjectsSlider = () => {
    const {theme} = useContext(MiscContext);
    return (
        <>
            <Divider dark={theme}/>
            <Card flat className="v4-container v4-slider" dark={theme}>
                <h2 className={theme?"dark-h-e":"light-h-e"}>Projects</h2>
                <Project/>
            </Card> 
            <Divider dark={theme}/>
       </>
    );
}
 
export default ProjectsSlider;