import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import Ripples from 'react-ripples'

const ExpandButton = ({setExpand, expand}) => {

    const [pulse, setPulse] = React.useState(true);

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
                className={`button-expand ${pulse? "heartbeat":""}`}
                onClick={handleClick}
            >
                {!expand
                    ?<FontAwesomeIcon icon={faArrowDown}/>
                    :<FontAwesomeIcon icon={faArrowUp}/>
                }
            </button> 
        </Ripples>
        </div> 
    );
}
 
export default ExpandButton;