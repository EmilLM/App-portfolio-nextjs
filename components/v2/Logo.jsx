import React, {useState} from 'react';
import { Tooltip } from 'reactstrap';

const Logo = () => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <>
            <h4 className="neon lem" id="lem">LEM</h4>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="lem" toggle={toggle}>
                Stands for my full name initials!
            </Tooltip>
        </>
    ) 
}
 
export default Logo;