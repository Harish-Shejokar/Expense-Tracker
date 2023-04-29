import React, { useState} from 'react'
import CreateExpneseCtx from './Create-ExpeseCtx';

const ExpenseProvider = ({ children }) => {
    const [expense, setExpense] = useState([]);
    console.log(expense);
    const addExpenseHandler = (item) => {
        setExpense(prev => {
            return [item, ...prev];
        })
    }

    
    const expenseContext = {
        expenseItem: expense,
        addExpense : addExpenseHandler,
    }
  return (
    <CreateExpneseCtx.Provider value={expenseContext}>
      {children}
    </CreateExpneseCtx.Provider>
  )
}

export default ExpenseProvider
