import { useDispatch } from 'react-redux';

import { calculatorActions } from '../../store/calculator';
import React from 'react';
import classes from './Button.module.css';

const Button = ({ name, onBackspace, onClear }) => {
    // const clickedButton = useRef();
    const dispatch = useDispatch();

    const onClickHandler = () => {
        console.log(`Value: ${name}`);
        dispatch(calculatorActions.keypadButtonValue(name));
        if(name === 'backspace'){
            onBackspace();
        }
        if(name === 'C'){
            onClear();
        }
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