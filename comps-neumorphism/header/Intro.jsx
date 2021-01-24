import Logo from "../../components/Logo"
import { Button} from 'ui-neumorphism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
    return (
        <div className="header-intro-container">
            <div className="header-card">
            <div className="logo-container">
                <Logo clsName={"v4-logo"}/>
            </div>
            <div className="title-container">
                <h1 className="header-text focus-in">
                    Apps <br/> Portfolio
                </h1>
                <Button color='var(--primary)' className="explore-button">Explore &nbsp;
                    <FontAwesomeIcon icon={faArrowDown} className="heartbeat"/>
                </Button>
            </div>
            <div className="img-container">
                <img alt="app-build-img" src="/assets/header-img.svg" />
            </div>
            </div>
        </div>
    );
}
 
export default Intro;

{/* <div className="header-inner">
    <div className="text-container">
        <h1 className={`header-text focus-in`}>APP PORTFOLIO </h1>
        <Logo/>
    </div>
    <img alt="app-build-img" src="/assets/header-img.svg" />
</div>   */}