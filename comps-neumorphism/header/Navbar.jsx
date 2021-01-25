import {useState, useContext} from "react";
import MiscContext from "../../components/MiscContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, Card} from 'ui-neumorphism';
import MenuDropdown from "./MenuDropdown";



const Navbar = () => {
   
    const [showMenu, setShowMenu] = useState(false);
    const {theme, setTheme} = useContext(MiscContext); 

    return ( 
        <Card flat className="v4-navbar" dark={theme}>
            <div className="v4-nav-container">
                <IconButton 
                    text={false} 
                    size='large' 
                    // color={theme?'var(--primary-dark)':'var(--primary-light)'} 
                    className="v4-theme-change"
                    onClick={()=>setTheme(!theme)}
                    dark={theme} 
                >
                   <FontAwesomeIcon icon={faLightbulb}/>
                </IconButton>

                <h1 className={theme?"dark-heading":"light-heading"}>Neumorphism</h1>

                <Button 
                    color='var(--primary)' 
                    onClick={()=>setShowMenu(!showMenu)}
                    className="style-change"
                    dark={theme} 
                >
                    Change style &nbsp;
                   <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={showMenu ? "rotate-up": "rotate-down"}
                   /> 

                   {showMenu && <MenuDropdown/>}

                </Button>
            </div>
        </Card>
    );
}
 
export default Navbar;