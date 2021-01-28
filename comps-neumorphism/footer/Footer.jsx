import {Card} from 'ui-neumorphism'
import Contact from './Contact';
import MiscContext from '../../components/MiscContext';
import {useContext} from "react";

const Footer = () => {
    const {theme} = useContext(MiscContext)
    return (
        <Card flat className="v4-contact v4-container" dark={theme}>
            <Card className="contact v4-contact-container" dark={theme}>
                <Contact/>
            </Card> 
        </Card>
    );
}
 
export default Footer;