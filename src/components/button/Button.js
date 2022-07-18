// import { Fragment } from "react";

import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div className={classes.button}>
            <span>{props.name}</span>
        </div>
    );
}

export default Button;