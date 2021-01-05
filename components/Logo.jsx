import {useContext} from "react"
import MiscContext from "./MiscContext"

const Logo = () => {

    const {animate} = useContext(MiscContext)

    return (
        <div className={`logo footer-logo tooltip ${animate?"flicker-in-glow":""}`} >
            <span className="logo-text">LEM</span>
            <div className="bottom">
                <p>Stands for my full name initials!</p>
                <i></i>
            </div>
        </div>          
    ) 
}
 
export default Logo;