
import {useContext} from "react";
import MiscContext from "../../components/MiscContext";
import {Card} from "ui-neumorphism";
import AboutInfo from '../content/AboutInfo';

const Content = () => {

    const {theme} = useContext(MiscContext);
    return (
        <>
            
            <Card className="v4-content v4-container" dark={theme} >
                <Card inset className="v4-about about-content" dark={theme}>
                    <AboutInfo/>    
                </Card>
            </Card>
        </>
    );
}
 
export default Content;