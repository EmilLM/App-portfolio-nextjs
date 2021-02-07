import style from './header.module.scss'
import Link from "next/link"
import {GiArrowDunk} from 'react-icons/gi';
import {VscCompareChanges} from 'react-icons/vsc';

const Header = ({scrollToRef}) => {


    return (

        <>
        <h1 className={style.title}><div className={style.t}>Portfolio</div></h1>
        <div className={style.container}>
            <div className={style.content}>
                <h2>Glassmorphism</h2>
                <p>- Luchian Emil -</p>
                <div className={style.header_buttons}>
                    <button onClick={scrollToRef}>
                        <GiArrowDunk/> &nbsp; Explore
                        </button>
                    <Link href="/">
                        <a>
                            <VscCompareChanges/> &nbsp; Change style
                        </a>
                    </Link> 
                </div>
                
            </div>
        </div>
        </>
    )
}
 
export default Header;