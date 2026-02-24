import classes from "./Menu.module.css";

import MenuLineItem from "../../components/utilities/MenuLineItem";
import { useAuth } from "../../hooks/UseAuth";

import PenIcon from "../../assets/pen-icon.svg";

const Menu = () => {
    const { logoutUser } = useAuth();

    return (
        <div className={classes.mainContainer}>
            <section className={classes.itemsSection}>
                <div className={classes.menuHeader}>ANALYTICS</div>
                <MenuLineItem itemName="Link 1" link="/" icon={<img src={PenIcon} alt="Icon" />} />
                <MenuLineItem itemName="Link 2" link="/" icon={<img src={PenIcon} alt="Icon" />} />
                <MenuLineItem itemName="Link 3" link="/" icon={<img src={PenIcon} alt="Icon" />} />
                <div className={classes.menuHeader}>ACCOUNT</div>
                <MenuLineItem itemName="Special Link 1" link="/" icon={<img src={PenIcon} alt="Icon" />} />
                <div className={classes.menuHeader}>APPLICATION</div>
                <MenuLineItem itemName="Support" link="/" icon={<img src={PenIcon} alt="Icon" />} />
                <MenuLineItem itemName="Settings" link="/" icon={<img src={PenIcon} alt="Icon" />} />
            </section>
            <MenuLineItem
                className={classes.logoutItem}
                itemName="Logout"
                link="/"
                icon={<img src={PenIcon} alt="Icon" />}
                onClick={() => {
                    logoutUser();
                }}
            />
        </div>
    );
};

export default Menu;
