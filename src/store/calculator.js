import { createSlice } from "@reduxjs/toolkit";

import { calculatingTotalValue } from './extra-calculations';

const initialState = {
    total: 0,
    buttonPressed: '',
    currentNumber: '0',
    equation: [],
    isNewNumber: true
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: initialState,
    reducers: {
        clear(state){
            state.total = 0;
            state.currentNumber = '0';
            state.equation = [];
        },
        backspaceCurrentNumberValue(state){
            let currentValue = state.currentNumber;
            const arr = [...state.equation];
            if(currentValue.length === 1 && arr.length === 1 && arr[0] === '0') {
                if(currentValue === '0'){
                    return;
                }
                state.currentNumber = '0';
                state.equation[state.equation.length -1] = '0';
                return;
            }
            if(arr[arr.length -1] === '') {
                arr.pop();
                currentValue = arr[arr.length-1];
            }
            const numArray = currentValue.split('');
            numArray.pop();
            state.currentNumber = numArray.join('');
            arr[arr.length - 1] = numArray.join('');
            state.equation = arr;
            state.total = calculatingTotalValue(arr);
        },
        keypadButtonValue(state, action){
            const keyPressed = action.payload;
            state.buttonPressed = keyPressed;
        },
        calculateCurrentNumberValue(state, action) {
            let currentValue = action.payload;
            let calculatedValue = state.currentNumber;
            // If the button pressed is "0,1,2,3,4,5,6,7,8,9,Dot"
            if(['1','2','3','4','5','6','7','8','9','0','.'].includes(currentValue)){
                state.isNewNumber = true;
                // If the user is pressing 0 multiple times for the first time
                if(calculatedValue === '0' && currentValue === '0'){
                    calculatedValue = '0';
                    state.currentNumber = calculatedValue;
                    return;
                }
                // If the first value is still 0 and user presses value other than 0
                if(calculatedValue === '0' && currentValue !== '.') {
                    calculatedValue = currentValue;
                    state.currentNumber = calculatedValue;
                    return;
                }
                // Inorder to include Dot after 0
                if(calculatedValue === '0' && currentValue === '.') {
                    calculatedValue = '0' + currentValue;
                    state.currentNumber = calculatedValue;
                    return;
                }
                if(calculatedValue.includes('.') && currentValue === '.') {
                    return;
                }
                if(calculatedValue !== '0') {
                    calculatedValue += currentValue;
                }
                state.currentNumber = calculatedValue;
            }
        },
        recordingNumbersAndOperations(state, action){
            const length = state.equation.length;
            if(['1','2','3','4','5','6','7','8','9','0','.'].includes(action.payload.key)){
                if(length === 0){
                    state.equation.push(action.payload.number);
                }
                state.equation[length-1] = action.payload.number;
            }
            if(['+','-','*','/'].includes(action.payload.key) && length !== 0){
                if(state.equation[length-1] === '' && ['+','-','*','/'].includes(state.equation[length-2])){
                    state.equation[length-2] = action.payload.key;
                }
                state.equation.push(state.buttonPressed, '');
                state.currentNumber = '';
                state.isNewNumber = false;
            }
        },
        calculateTotal(state) {
            const arr = [...state.equation];
            state.total = calculatingTotalValue(arr);
        },
        changeOperationSign(state,action){
            const length = state.equation.length;
            if(state.equation[length-1] === '' && ['+','-','*','/'].includes(state.equation[length-2])){
                state.equation[length-2] = action.payload;
            }
        }
    }
});

export default calculatorSlice.reducer;

export const calculatorActions = calculatorSlice.actions;