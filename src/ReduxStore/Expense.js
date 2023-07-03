import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const intialExpenseState = {
  expenseData: [],
  totalExpense: 0,
  loading: false,
  error: false,
  editID: null,
  subscription: false,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: intialExpenseState,
  reducers: {
    allExpense(state, action) {
      // console.log(action.payload);
      state.expenseData = action.payload;
    },
    totalExpenseAmount(state,action) {
      //   console.log(state.totalExpense)
      state.totalExpense = state.expenseData.reduce((prev, curr) => {
        return prev + Number(curr.expense);
      }, 0);
    },
    deleteExpense(state, action) {
      const newList = state.expenseData.filter((item) => {
        return item.expense !== action.payload;
      });
      state.expenseData = newList;
      console.log("delete from redux");
    },
    addExpense(state, action) {
      state.expenseData = [action.payload, ...state.expenseData];
    },
    updateEditID(state, action) {
      state.editID = action.payload;
    },
    activatePremium(state) {
      state.subscription = true;
      console.log(state.subscription)
    },
    resetRedux(state) {
      state.expenseData = [];
      state.totalExpense = 0;
      state.editID = null;
      state.subscription = false;
    }
    
  }
});

// let email = "";
// if (localStorage.getItem("email") !== null) {
//   email = localStorage.getItem("email");
//   email = email.replace(/[^a-zA-Z0-9]/g, "");
// }

export const expenseAction = expenseSlice.actions;

export default expenseSlice.reducer;
