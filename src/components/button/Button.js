import React from 'react';
import classes from './Button.module.css';

const Button = ({ name, callback }) => {

    const onClickHandler = () => {
        callback(name);
    };

    if(name === 'backspace') {
        return (
            <div onClick={onClickHandler} className={classes.button}>
                <span><i className="fa-solid fa-delete-left"></i></span>
            </div>
        );
    }

    return (
        <div onClick={onClickHandler} className={classes.button}>
            <span>{name}</span>
        </div>
    );
}

export default Button;