import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import CreateExpenseCtx from "../../../Store/ExpenseContext/Create-ExpeseCtx";
import { useEffect } from "react";

const ExpenseList = () => {
  const ExpCtx = useContext(CreateExpenseCtx);

  



  return (
    <Card className="mb-3">
      <Card.Body>
        {ExpCtx.expenseItem.map((item) => {
          return (
            <li key={Math.random()}>
              {item.expense}-{item.description}-{item.category}
            </li>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default ExpenseList;
