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
            // let currentValue = state.currentNumber;
            const arr = [...state.equation];
            let currentValue = arr[arr.length-1];
            // if(['+','-','*','/'].includes(arr[arr.length -1])) {
            //     currentValue = arr[arr.length-1];
            // }
            if(currentValue.length === 1 && arr.length === 1 && arr[0].length === 1) {
                if(currentValue === '0'){
                    return;
                }
                state.currentNumber = '0';
                state.equation[state.equation.length -1] = '0';
                return;
            }
            // if(currentValue === '') {
            //     currentValue = arr[arr.length-1];
            // }
            // if(arr[arr.length -1] === '') {
            //     arr.pop();
            //     currentValue = arr[arr.length-1];
            // }
            const numArray = currentValue.split('');
            const removedElement = numArray.pop();
            if(['+','-','*','/'].includes(removedElement)){
                state.isNewNumber = true;
            }
            if(numArray.length === 0){
                arr.pop();
            } else {
                arr[arr.length - 1] = numArray.join('');
            }
            state.currentNumber = arr[arr.length-1];
            state.equation = arr;
            console.log('Value of arr from backspace for calculating total is ', {arr: arr});
            state.total = calculatingTotalValue([...arr]);
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
            console.log('+++++', {length, arr: [...state.equation]});
            if(['1','2','3','4','5','6','7','8','9','0','.'].includes(action.payload.key)){
                if(length === 0){
                    state.equation.push(action.payload.number);
                }
                if(['+','-','*','/'].includes(state.equation[length-1])){
                    state.equation.push(action.payload.number);
                } else {
                    state.equation[length-1] = action.payload.number;
                }
            }
            if(['+','-','*','/'].includes(action.payload.key) && length !== 0){
                // if(state.equation[length-1] === '' && ['+','-','*','/'].includes(state.equation[length-2])){
                //     state.equation[length-2] = action.payload.key;
                // }
                state.equation.push(action.payload.key);
                state.currentNumber = '';
                state.isNewNumber = false;
            }
            console.log('+++++', {length, arr: [...state.equation]});
            const arr = [...state.equation];
        },
        calculateTotal(state) {
            const arr = [...state.equation];
            state.total = calculatingTotalValue(arr);
        },
        changeOperationSign(state,action){
            const length = state.equation.length;
            if(['+','-','*','/'].includes(state.equation[length-1])){
                state.equation[length-1] = action.payload;
            }
        }
    }
});

export default calculatorSlice.reducer;

export const calculatorActions = calculatorSlice.actions;