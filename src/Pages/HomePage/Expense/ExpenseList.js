import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import CreateExpenseCtx from "../../../Store/ExpenseContext/Create-ExpeseCtx";
import { useEffect } from "react";
import CreateAuth from "../../../Store/AuthContext/Create-Auth";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const ExpCtx = useContext(CreateExpenseCtx);
  // const AuthCtx = useContext(CreateAuth);

  
  
  useEffect(() => {
    ExpCtx.getDataFromFireBase();
  }, []);

  return (
    <Card className="mb-3">
      <Card.Body>
        {ExpCtx.expenseItem.map((item) => {
          // console.log(item);
          return (
            <ExpenseItem
              key={Math.random()}
              id={item.id}
              expense={item.expense}
              description={item.description}
              category={item.category}
              editExpense= {props.editExpense}
            />
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default ExpenseList;
