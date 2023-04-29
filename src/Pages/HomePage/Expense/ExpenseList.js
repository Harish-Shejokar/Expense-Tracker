import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import CreateExpenseCtx from '../../../Store/ExpenseContext/Create-ExpeseCtx';

const ExpenseList = () => {
    const ExpCtx = useContext(CreateExpenseCtx);
  return (
    <Card>
          <Card.Body>{ExpCtx.expenseItem.map(item => {
              return <li>{item.expense}-{item.description}</li>;
         
      })}</Card.Body>
    </Card>
  );
}

export default ExpenseList
