import { createSlice } from "@reduxjs/toolkit";

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
            const currentValue = state.currentNumber;
            console.log(currentValue.length);
            if(currentValue.length === 1) {
                if(currentValue === '0'){
                    return;
                }
                state.currentNumber = '0';
                state.equation[state.equation.length -1] = '0';
                return;
            }
            const numArray = currentValue.split('');
            numArray.pop();
            state.currentNumber = numArray.join('');
            state.equation[state.equation.length -1] = numArray.join('');
        },
        keypadButtonValue(state, action){
            const keyPressed = action.payload;
            state.buttonPressed = keyPressed;
        },
        calculateCurrentNumberValue(state, action) {
            // const currentIndex = state.equation.length;
            // console.log(currentIndex);
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
                // if(currentIndex === 0) {
                //     state.equation.push(calculatedValue);
                // }
                // state.equation[state.equation.length - 1] = calculatedValue;
            }
        },
        recordingNumbersAndOperations(state, action){
            const length = state.equation.length;
            console.log({payload: action.payload});
            // const lastItem = state.equation[length - 1];
            // if(['+','-','*','/'].includes(lastItem)){
            //     if(state.buttonPressed !== lastItem){
            //         state.equation[length-1] = action.payload.operation;
            //         return;
            //     }
            //     return;
            // }
            // state.equation.push(action.payload.number);
            // state.equation.push(action.payload.operation);
            // state.currentNumber = '0';
            // state.isNewNumber = false;
            if(['1','2','3','4','5','6','7','8','9','0','.'].includes(action.payload.key)){
                if(length === 0){
                    state.equation.push(action.payload.number);
                }
                state.equation[length-1] = action.payload.number;
            }
            if(['+','-','*','/'].includes(action.payload.key)){
                console.log(`Button pressed is ${state.buttonPressed}`);
                state.equation.push(state.buttonPressed, '');
                state.currentNumber = '0';
                state.isNewNumber = false;
            }
        },
        calculateTotal(state) {
            const arr = [...state.equation];
            let arrLength = arr.length;
            let total = 0;
            while(arrLength > 2){
                const add = arr.includes('+');
                let tempTotal = 0;
                const minus = arr.includes('-');
                if(minus) {
                    const minusIndex = arr.findIndex(a => a === '-');
                    const preNum = +arr[minusIndex-1];
                    const postNum = +arr[minusIndex+1];
                    tempTotal = preNum - postNum;
                    arr.splice(minusIndex-1, 3, tempTotal);
                    arrLength -= 2;
                    if(arrLength > 2){
                        continue;
                    }
                }
                if(add){
                    const addIndex = arr.findIndex(a => a === '+');
                    const preNum = +arr[addIndex-1];
                    const postNum = +arr[addIndex+1];
                    tempTotal = preNum + postNum;
                    arr.splice(addIndex-1, 3, tempTotal);
                    console.log(`Array after adding is ${arr}`);
                    // total += sum;
                    arrLength -= 2;
                    if(arrLength > 2) {
                        continue;
                    }
                }
                total += tempTotal;
            }
            state.total = total;
        }
    }
});

export default calculatorSlice.reducer;

export const calculatorActions = calculatorSlice.actions;