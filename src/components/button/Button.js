import { useDispatch } from 'react-redux';

import { calculatorActions } from '../../store/calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import classes from './Button.module.css';

const Button = ({ name }) => {
    // const clickedButton = useRef();
    const dispatch = useDispatch();

    const onClickHandler = () => {
        console.log(`Value: ${name}`);
        dispatch(calculatorActions.keypadButtonValue(name));
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