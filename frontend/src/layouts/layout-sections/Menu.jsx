import classes from "./Menu.module.css";

import MenuLineItem from "../../components/utilities/MenuLineItem";

const Menu = () => {
    return (
        <div className={classes.mainContainer}>
            <section className={classes.logoSection}>
                <div className={classes.logo}>
                    <p>W</p>
                </div>
                <div className={classes.seperatorV}></div>
                <p>Dashboard</p>
            </section>
            <section className={classes.itemsSection}>
                <MenuLineItem itemName="Link 1" link="/app/home" icon={<div></div>} />
                <MenuLineItem itemName="Link 2" link="/app/transactions" icon={<div></div>} />
                <MenuLineItem itemName="Link 3" link="/app/rents" icon={<div></div>} />
                <div className={classes.seperatorH}></div>
                <MenuLineItem itemName="Special Link 1" link="/app/properties" icon={<div></div>} />
                <div className={classes.seperatorH}></div>
                <MenuLineItem itemName="Support" link="/app/support" icon={<div></div>} />
                <MenuLineItem itemName="Settings" link="/app/settings" icon={<div></div>} />
            </section>
            <MenuLineItem
                className={classes.logoutItem}
                itemName="Logout"
                link="/"
                icon={<div></div>}
                onClick={() => {}}
            />
        </div>
    );
};

export default Menu;
