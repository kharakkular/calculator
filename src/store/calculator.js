import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0,
    buttonPressed: '',
    number: '0'
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: initialState,
    reducers: {
        clear(state){
            state.total = 0;
            state.number = '0';
        },
        addition(state, action){
            const { num1, num2 } = action.payload;
            state.total = num1 + num2;
        },
        subtraction(state, action){
            const { num1, num2 } = action.payload;
            state.total = num1 - num2;
        },
        backspaceCurrentNumberValue(state){
            const currentValue = state.number;
            console.log(currentValue.length);
            if(currentValue.length === 1) {
                if(currentValue === '0'){
                    return;
                }
                state.number = '0';
                return;
            }
            const numArray = currentValue.split('');
            numArray.pop();
            state.number = numArray.join('');
        },
        keypadButtonValue(state, action){
            let currentValue = action.payload;
            state.buttonPressed = currentValue;
            let calculatedValue = state.number;
            // If the button pressed is "0,1,2,3,4,5,6,7,8,9,Dot"
            if(['1','2','3','4','5','6','7','8','9','0','.'].includes(currentValue)){
                // If the user is pressing 0 multiple times for the first time
                if(calculatedValue === '0' && currentValue === '0'){
                    calculatedValue = '0';
                    state.number = calculatedValue;
                    return;
                }
                // If the first value is still 0 and user presses value other than 0
                if(calculatedValue === '0' && currentValue !== '.') {
                    calculatedValue = currentValue;
                    state.number = calculatedValue;
                    return;
                }
                // Inorder to include Dot after 0
                if(calculatedValue === '0' && currentValue === '.') {
                    calculatedValue = '0' + currentValue;
                    state.number = calculatedValue;
                    return;
                }
                if(calculatedValue.includes('.') && currentValue === '.') {
                    return;
                }
                if(calculatedValue !== '0') {
                    calculatedValue += currentValue;
                }
                state.number = calculatedValue;
            }
        }
    }
});

export default calculatorSlice.reducer;

export const calculatorActions = calculatorSlice.actions;