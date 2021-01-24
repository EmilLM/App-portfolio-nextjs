import {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, Card } from 'ui-neumorphism';
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
  
    return ( 
        <nav className="v4-navbar">
            <div className="v4-nav-container">

                <IconButton text={false} size='medium' color='var(--primary)   '>
                   <FontAwesomeIcon icon={faLightbulb}/>
                </IconButton>

                <h1>Neumorphism</h1>

                <Button 
                    color='var(--primary)' 
                    onClick={()=>setShowMenu(!showMenu)}
                    className="style-change" 
                >
                    Change style &nbsp;
                   <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={showMenu ? "rotate-up": "rotate-down"}
                   /> 

                   {showMenu && <MenuDropdown clsName={"style-change-menu"}/>}

                </Button>
            </div>
        </nav>
    );
}
 
export default Navbar;