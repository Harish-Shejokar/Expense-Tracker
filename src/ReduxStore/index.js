import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Auth';
import ExpenseReducer from './Expense';


const Store = configureStore({
    reducer: {
        authentication: AuthReducer,
        expense : ExpenseReducer,
    },
});


export default Store;