import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { calculatorActions } from '../../store/calculator';
import Button from '../button/Button';
import classes from './Keypad.module.css';

const Keypad = props => {
    const keyPressed = useSelector(state => state.calculator.buttonPressed);
    const currentNumber = useSelector(state => state.calculator.currentNumber);
    // const equation = useSelector(state => state.calculator.equation);
    const isNewNumber = useSelector(state => state.calculator.isNewNumber);
    // const operationKeyPressed = useSelector(state => state.calculator.operationKeyPressed);
    console.log(`Key pressed from keypad is ${keyPressed}`);
    const dispatch = useDispatch();

    const buttonPressedHandler = (name) => {
        dispatch(calculatorActions.keypadButtonValue(name));
        dispatch(calculatorActions.calculateCurrentNumberValue(name));
        if(name === 'backspace') {
            dispatch(calculatorActions.backspaceCurrentNumberValue());
        }
    }

    const firstRow = ['C', '+/-', '%', '/'].map((val, index) => {
        return <Button key={index} name={val} callback={buttonPressedHandler} />
    });
    const secondRow = ['7', '8', '9', '*'].map((val, index) => {
        return <Button key={index} name={val} callback={buttonPressedHandler} />
    });
    const thirdRow = ['4', '5', '6', '-'].map((val, index) => {
        return <Button key={index} name={val} callback={buttonPressedHandler} />
    });
    const fourthRow = ['1', '2', '3', '+'].map((val, index) => {
        return <Button key={index} name={val} callback={buttonPressedHandler} />
    });
    const fifthRow = ['0', '.', 'backspace', '='].map((val, index) => {
        return <Button key={index} name={val} callback={buttonPressedHandler} />
    });

    useEffect(() => {
        if(keyPressed === 'C'){
            dispatch(calculatorActions.clear());
        }
    }, [keyPressed, dispatch]);

    useEffect(() => {
        console.log(`Value of isNewNumber from calculator.js "${isNewNumber}"`);
        if(isNewNumber) {
            const tempObj = {
                key: keyPressed,
                number: currentNumber
            };
            dispatch(calculatorActions.recordingNumbersAndOperations(tempObj));
        }
    }, [currentNumber,dispatch,keyPressed, isNewNumber]);

    useEffect(() => {
        dispatch(calculatorActions.calculateTotal());
    }, [dispatch, currentNumber]);

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