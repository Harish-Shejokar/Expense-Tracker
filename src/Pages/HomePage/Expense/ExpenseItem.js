import React from "react";
import { Container, Button, Col,} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { expenseAction } from "../../../ReduxStore/Expense";

const ExpenseItem = (props) => {
  const dispatch = useDispatch();
  let email = localStorage.getItem("email");
  email = email.replace(/[^a-zA-Z0-9]/g, "");
  const Id = props.id;

  const deleteFromFireBase = async () => {
    try {
      const response = await fetch(
        `https://expense-data-11e4b-default-rtdb.firebaseio.com/${email}/${Id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("delete OK");
        console.log("Expense successfuly deleted");
        dispatch(expenseAction.totalExpenseAmount());
      } else {
        console.log("delete not OK");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = () => {
    // ExpCtx.deleteExpense(props.expense, props.description, props.category);
    dispatch(expenseAction.deleteExpense(props.expense));
    dispatch(expenseAction.totalExpenseAmount());
    deleteFromFireBase();
  };

  const editHandler = () => {
    console.log(props)
    
    dispatch(expenseAction.deleteExpense(props.expense));
    deleteFromFireBase();
    props.editExpense(
      props.expense,
      props.description,
      props.category,
      props.id
    );
    // editOnFireBase();
  };
  return (
    <>
      <Container fluid className="d-flex fw-bold ">
        <Col className="text-center m-1">{props.expense}</Col>
        <Col className="text-center m-1">{props.category}</Col>
        <Col className="text-center m-1">{props.description}</Col>
        <Col className="text-center m-1">
          <Button
            className="mx-3"
            onClick={editHandler}
            variant="outline-warning"
            size="sm"
          >
            Edit
          </Button>
        </Col>
        <Col className="text-center m-1">
          <Button
            className="mx-3"
            onClick={deleteHandler}
            variant="outline-danger"
            size="sm"
          >
            Delete
          </Button>
        </Col>
      </Container>
    </>
  );
};

export default ExpenseItem;
