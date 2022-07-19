import { configureStore } from "@reduxjs/toolkit";

import calulatorReducer from './calculator';

const store = configureStore({
    reducer: {
        calculator: calulatorReducer
    }
});

export default store;