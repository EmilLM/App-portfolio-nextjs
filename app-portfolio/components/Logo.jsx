import React, {useState} from 'react';
import { Tooltip } from 'reactstrap';

const Logo = () => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <>
            <h4 className="lem" id="lem_logo">LEM</h4>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="lem_logo" toggle={toggle}>
                Stands for my full name initials!
            </Tooltip>
        </>
    ) 
}
 
export default Logo;