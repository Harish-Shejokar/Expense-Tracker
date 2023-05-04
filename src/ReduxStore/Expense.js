import { createSlice } from "@reduxjs/toolkit";


const intialExpenseState = { expenseData: [], totalExpense: 0 };

const expenseSlice = createSlice({
    name: "expense",
    initialState: intialExpenseState,
    reducers: {
        allExpense(state, action) {
            console.log(action.payload);
            state.expenseData = action.payload;
        },
        totalExpenseAmount(state) {
            state.totalExpense = state.expenseData.reduce((prev,curr)=> {
                return prev + Number(curr.expense);
            },0)
            console.log(state.totalExpense)
        },
        deleteExpenseById(state,action) {
            const newList = state.expenseData.filter(item => {
                return item.id !== action.payload;
            })
            state.expenseData = newList;
        },
        addExpense(state, action) {
           state.expenseData = [ action.payload,...state.expenseData]  
        },
       
    }
})

export const expenseAction = expenseSlice.actions;

export default expenseSlice.reducer;