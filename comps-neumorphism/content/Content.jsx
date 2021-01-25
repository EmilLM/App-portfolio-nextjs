
import {useContext} from "react";
import MiscContext from "../../components/MiscContext";
import {Card} from "ui-neumorphism";

const Content = () => {

    const {theme} = useContext(MiscContext);
    return (
        <>
            
            <Card className="v4-content v4-container" dark={theme} >
                <Card inset className="v4-about" dark={theme}>

                </Card>
            </Card>
        </>
    );
}
 
export default Content;