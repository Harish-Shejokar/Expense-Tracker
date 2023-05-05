import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import CreateExpenseCtx from "../../../Store/ExpenseContext/Create-ExpeseCtx";
import { useEffect } from "react";
// import CreateAuth from "../../../Store/AuthContext/Create-Auth";
import ExpenseItem from "./ExpenseItem";
import { useSelector } from "react-redux";

const ExpenseList = (props) => {
  const ExpCtx = useContext(CreateExpenseCtx);
  
  const dataFromRedux = useSelector((state) => state.expense.expenseData);

  // console.log(dataFromRedux);
 

  return (
    <Card className="mb-3">
      <Card.Body>
        {dataFromRedux.map((item) => {
          // console.log(item);
          return (
            <ExpenseItem
              key={Math.random()}
              id={item.id}
              expense={item.expense}
              description={item.description}
              category={item.category}
              editExpense={props.editExpense}
            />
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default ExpenseList;
