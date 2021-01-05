import Logo from "../Logo"
import MiscContext from "../MiscContext"
import {useContext} from "react"

const HeaderIntro = () => {
    const {animate} = useContext(MiscContext);
    return (
        <div className="header-inner">
            <div className="text-container">
                <h1 className={`header-text ${animate?"pop-up":""}`}>APP PORTFOLIO </h1>
                {/* <span className="text-by">by</span> */}
                <Logo/>
            </div>
            <img alt="app-build-img" src={" /assets/header-img.svg"} className={animate?"float": ""} />
        </div>  
    );
}
 
export default HeaderIntro;