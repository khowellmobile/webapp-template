import classes from "./Menu.module.css";

import MenuLineItem from "../../components/utilities/MenuLineItem";

const Menu = () => {
    return (
        <div className={classes.mainContainer}>
            <section className={classes.itemsSection}>
                <div className={classes.menuHeader}>ANALYTICS</div>
                <MenuLineItem itemName="Link 1" link="/app/home" icon={<div></div>} />
                <MenuLineItem itemName="Link 2" link="/app/transactions" icon={<div></div>} />
                <MenuLineItem itemName="Link 3" link="/app/rents" icon={<div></div>} />
                <div className={classes.menuHeader}>ACCOUNT</div>
                <MenuLineItem itemName="Special Link 1" link="/app/properties" icon={<div></div>} />
                <div className={classes.menuHeader}>APPLICATION</div>
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
