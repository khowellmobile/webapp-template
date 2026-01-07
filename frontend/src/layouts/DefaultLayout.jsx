import classes from "./DefaultLayout.module.css";

/*
 *    The layout component is meant to make it easy to switch in and out pages
 *    without having to worry about positioning a header, menu, footer, etc everytime
 */
const DefaultLayout = (props) => {
    return <div className={classes.mainContainer}>{props.children}</div>;
};

export default DefaultLayout;
