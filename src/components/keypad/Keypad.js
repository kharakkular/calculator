// import { Fragment } from "react";

import { useDispatch } from 'react-redux';

import { calculatorActions } from '../../store/calculator';
import Button from '../button/Button';
import classes from './Keypad.module.css';

const Keypad = props => {

    const dispatch = useDispatch();

    const backspaceHandler = () => {
        dispatch(calculatorActions.backspaceCurrentNumberValue());
    }

    const clearScreenHandler = () => {
        dispatch(calculatorActions.clear());
    }

    const firstRow = ['C', '+/-', '%', '/'].map((val, index) => {
        if(val === 'C'){
            return <Button key={index} name={val} onClear={clearScreenHandler} />
        }
        return <Button key={index} name={val} />
    });
    const secondRow = ['7', '8', '9', '*'].map((val, index) => {
        return <Button key={index} name={val} />
    });
    const thirdRow = ['4', '5', '6', '-'].map((val, index) => {
        return <Button key={index} name={val} />
    });
    const fourthRow = ['1', '2', '3', '+'].map((val, index) => {
        return <Button key={index} name={val} />
    });
    const fifthRow = ['0', '.', 'backspace', '='].map((val, index) => {
        if(val === 'backspace') {
            return <Button key={index} name={val} onBackspace={backspaceHandler}/>
        }
        return <Button key={index} name={val} />
    });

    return (
        <div className={classes.keypad}>
            <div className={classes.row}>{firstRow}</div>
            <div className={classes.row}>{secondRow}</div>
            <div className={classes.row}>{thirdRow}</div>
            <div className={classes.row}>{fourthRow}</div>
            <div className={classes.row}>{fifthRow}</div>
        </div>
    );
}

export default Keypad;