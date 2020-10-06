import React, {useState} from 'react';


const Logo = ({footerLogo}) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <>
            <div className="lem flicker-in-glow footer-logo" id="lem_logo">
                <span className="logo-text">LEM</span>
            </div>
            {/* <Tooltip placement="bottom" isOpen={tooltipOpen} target="lem_logo" toggle={toggle}>
                Stands for my full name initials!
            </Tooltip> */}
        </>
    ) 
}
 
export default Logo;