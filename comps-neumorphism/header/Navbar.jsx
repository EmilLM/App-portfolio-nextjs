import {useState, useContext, useEffect} from "react";
import MiscContext from "../../components/MiscContext";
import StylesButton from "./StylesButton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, Card} from 'ui-neumorphism';




const Navbar = () => {
   
    
    const {theme, setTheme} = useContext(MiscContext); 


    const [offset, setOffset] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 60) {
                setOffset(true)
            } else setOffset(false)
        }
    }, [offset]);

    return ( 
        <Card flat className="v4-navbar" dark={theme}>
            <div className="v4-nav-container">
                <IconButton 
                    text={false} 
                    size='large' 
                    color={theme?'var(--primary-dark)':'var(--primary)'} 
                    className="v4-theme-change"
                    id={offset?"theme-scrolling":""}
                    onClick={()=>setTheme(!theme)}
                    dark={theme} 
                >
                   <FontAwesomeIcon icon={faLightbulb}/>
                </IconButton>

                <h1 className={theme?"dark-heading":"light-heading"}>Neumorphism</h1>

                <StylesButton offset={offset} setOffset={setOffset} />
                    
            </div>
        </Card>
    );
}
 
export default Navbar;