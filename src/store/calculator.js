import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0,
    buttonPressed: ''
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: initialState,
    reducers: {
        clear(state){
            state.total = 0;
        },
        addition(state, action){
            const { num1, num2 } = action.payload;
            state.total = num1 + num2;
        },
        subtraction(state, action){
            const { num1, num2 } = action.payload;
            state.total = num1 - num2;
        },
        keypadButtonValue(state, action){
            state.buttonPressed = action.payload;
        }
    }
});

export default calculatorSlice.reducer;

export const calculatorActions = calculatorSlice.actions;