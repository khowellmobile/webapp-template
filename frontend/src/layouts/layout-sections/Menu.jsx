import classes from "./Menu.module.css";

import MenuLineItem from "../../components/utilities/MenuLineItem";

import ReactIcon from "../../assets/react.svg";

const Menu = () => {
    return (
        <div className={classes.mainContainer}>
            <section className={classes.itemsSection}>
                <div className={classes.menuHeader}>ANALYTICS</div>
                <MenuLineItem itemName="Link 1" link="/" icon={<img src={ReactIcon} alt="Icon" />} />
                <MenuLineItem itemName="Link 2" link="/" icon={<img src={ReactIcon} alt="Icon" />} />
                <MenuLineItem itemName="Link 3" link="/" icon={<img src={ReactIcon} alt="Icon" />} />
                <div className={classes.menuHeader}>ACCOUNT</div>
                <MenuLineItem itemName="Special Link 1" link="/" icon={<img src={ReactIcon} alt="Icon" />} />
                <div className={classes.menuHeader}>APPLICATION</div>
                <MenuLineItem itemName="Support" link="/" icon={<img src={ReactIcon} alt="Icon" />} />
                <MenuLineItem itemName="Settings" link="/" icon={<img src={ReactIcon} alt="Icon" />} />
            </section>
            <MenuLineItem
                className={classes.logoutItem}
                itemName="Logout"
                link="/"
                icon={<img src={ReactIcon} alt="Icon" />}
                onClick={() => {}}
            />
        </div>
    );
};

export default Menu;
