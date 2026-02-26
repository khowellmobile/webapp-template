import { useState } from "react";

import classes from "./ProfileDropdown.module.css";

import upChevIcon from "../../assets/chevron-up-icon.svg";
import downChevIcon from "../../assets/chevron-down-icon.svg";

const ProfileDropdown = ({ val, clickTypeHandler }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const propertyTypes = ["commercial", "residential", "multi-unit"];

    const handleClick = (type) => {
        clickTypeHandler(type);
        setIsExpanded(false);
    };

    const toggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div>
            <div className={`${classes.mainContainer} ${isExpanded ? classes.expandedStyle : ""}`} onClick={toggle}>
                <div className={classes.emailDiv}>
                    <p>admin@gmail.com</p>
                </div>
                <div className={classes.divIcon}>
                    <p>W</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileDropdown;
