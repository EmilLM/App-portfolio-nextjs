import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import Ripples from 'react-ripples'
import {useState} from "react"

const ExpandButton = ({setExpand, expand}) => {

    const [pulse, setPulse] = useState(true);

    const handleClick = () => {
        setExpand(prev=>!prev);
        setPulse(prev=>!prev);
       
    }
    return (  
        <div
            style={{
            display: 'inline-flex',
            borderRadius: 50,
            overflow: 'hidden',
            }}
        >  
        <Ripples>  
            <button 
                className={`button-expand`}
                onClick={handleClick}
            >
                {!expand
                    ?<div className="heartbeat"><FontAwesomeIcon icon={faArrowDown}/></div>
                    :<FontAwesomeIcon icon={faArrowUp}/>
                }
            </button> 
        </Ripples>
        </div> 
    );
}
 
export default ExpandButton;