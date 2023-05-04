import React from 'react'

import { useSelector } from "react-redux";

const Error = () => {
  
  const dataFromRedux = useSelector((state) => state.expense.expenseData);
  const temp = useSelector(state => state.expense.temp);
    console.log(dataFromRedux);
    console.log(temp);
  return (
      <div>
          <h1 className='text-center'>OOPs Page Not Found</h1>
      
    </div>
  )
}

export default Error
