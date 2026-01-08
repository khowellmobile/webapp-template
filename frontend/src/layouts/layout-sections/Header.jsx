import classes from "./Header.module.css";

import ReactIcon from "../../assets/react.svg";
import SearchBox from "../../components/utilities/SearchBox";

const Header = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.left}>
                <div className={classes.icon}>
                    <img src={ReactIcon} alt="Icon" />
                </div>
                <p>
                    <strong>React</strong>App
                </p>
                <SearchBox type="text" name="search" value={""} placeholder={"Search"} />
            </div>
            <div className={classes.right}>
                <div className={classes.divIcon}>
                    <p>W</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
