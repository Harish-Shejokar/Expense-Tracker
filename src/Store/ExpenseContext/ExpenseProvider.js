import React, { useState,useEffect} from 'react'
import CreateExpneseCtx from './Create-ExpeseCtx';

const ExpenseProvider = ({ children }) => {
    const [expense, setExpense] = useState([]);
    

  
  useEffect(() => {
    getDataFromFireBase();
  }, []);
  
    const addExpenseHandler = (item) => {
        setExpense(prev => {
            return [item, ...prev];
        })
    }

  const getDataFromFireBase = async() => {
     try {

      const result = await fetch(
        "https://expense-data-11e4b-default-rtdb.firebaseio.com/expense.json");

      if (result.ok) {
        console.log('get data   OK');
        const data = await result.json();
        let dataInArray = Object.values(data);
        // console.log(dataInArray);
        // console.log(data);
        setExpense(dataInArray);
      } else {
        console.log('data stored not  OK')
      }
      
    } catch (err) {
      console.log(err);
    }
  }
    
    const expenseContext = {
      expenseItem: expense,
      addExpense: addExpenseHandler,
      getDataFromFireBase: getDataFromFireBase,
    };
  return (
    <CreateExpneseCtx.Provider value={expenseContext}>
      {children}
    </CreateExpneseCtx.Provider>
  )
}

export default ExpenseProvider
