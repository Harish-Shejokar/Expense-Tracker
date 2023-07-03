import React, { useEffect, useRef } from "react";
import Emoji from "../../../Components/Emoji";
import {
  Card,
  Container,
  Form,
  Row,
  Col,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import ExpenseList from "./ExpenseList";
import { useDispatch, useSelector } from "react-redux";
import { expenseAction } from "../../../ReduxStore/Expense";
import "../../../App.css";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const expenseRef = useRef();
  const desRef = useRef();
  const categoryRef = useRef();
  const theme = useSelector((state) => state.theme.currTheme);
  const subscription = useSelector(state => state.expense.subscription);
  const bg = theme === "darkTheme" ? "dark" : "light";
  const totalExpenseFromRedux = useSelector(
    (state) => state.expense.totalExpense
  );


  const putRequestOnFireBase = async (expense, description, category, Id) => {
    let email = localStorage.getItem("email");
    email = email.replace(/[^a-zA-Z0-9]/g, "");

    try {
      const response = await fetch(
        `https://expense-data-11e4b-default-rtdb.firebaseio.com/${email}/${Id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            expense: expense,
            description: description,
            category: category,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("put request OK");
        // ExpeseCtx.editExpense(null);
        dispatch(expenseAction.updateEditID(null));
      } else {
        console.log("put request not OK");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editExpense = (expense, description, category, editId) => {
    document.querySelector(".expense").value = expense;
    document.querySelector(".description").value = description;
    document.querySelector(".category").value = category;
    // ExpeseCtx.editExpense(editId);
    console.log(editId);
    dispatch(expenseAction.updateEditID(editId));
  };

  const storeDataOnDataBase = async (expense, description, category) => {
    let email = localStorage.getItem("email");
    email = email.replace(/[^a-zA-Z0-9]/g, "");

    try {
      const result = await fetch(
        `https://expense-data-11e4b-default-rtdb.firebaseio.com/${email}.json`,
        {
          method: "POST",
          body: JSON.stringify({
            expense: expense,
            description: description,
            category: category,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (result.ok) {
        console.log("data stored on database  OK");
      } else {
        console.log("data stored not  OK");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const editId = useSelector((state) => state.expense.editID);

  const addExpenseHandler = (e) => {
    e.preventDefault();
    if (expenseRef.current.value === "" || desRef.current.value === "") {
      alert("Enter valid Data");
      return;
    }
    
    const obj = {
      expense: expenseRef.current.value,
      description: desRef.current.value,
      category: categoryRef.current.value,
    };
    // ExpeseCtx.addExpense(obj);
    dispatch(expenseAction.addExpense(obj));
    dispatch(expenseAction.totalExpenseAmount());

    console.log(editId);
    if (editId) {
      console.log("edit88888888");
      putRequestOnFireBase(
        expenseRef.current.value,
        desRef.current.value,
        categoryRef.current.value,
        editId
      );
    } else
      storeDataOnDataBase(
        expenseRef.current.value,
        desRef.current.value,
        categoryRef.current.value
      );
    document.querySelector(".expense").value = "Expense";
    document.querySelector(".description").value = "";
    document.querySelector(".category").value = "Category";
  };

  const activatePremium = () => {
    dispatch(expenseAction.activatePremium());
  }
 
 
  return (
    <>
      <div>
        <Container>
          <Row className="vh-90 d-flex justify-content-center mt-5 mb-5">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>

              <Card bg={bg} className="shadow px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center ">
                      Fill Expense Details <Emoji symbol="👇" />
                    </h2>
                    <div className="mb-3">
                      <Form>
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">
                            Amount
                          </Form.Label>
                          <Form.Control
                            className="expense"
                            ref={expenseRef}
                            type="number"
                            placeholder="Expense"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">
                            Category
                          </Form.Label>
                          <div>
                            <select
                              className="category"
                              ref={categoryRef}
                              style={{
                                width: "100%",
                                padding: ".4rem",
                                borderColor: "skyblue",
                                fontWeight: "bold",
                              }}
                            >
                              <option>Category</option>
                              <option>Food</option>
                              <option>Petrol</option>
                              <option>Bill</option>
                              <option>Rent</option>
                            </select>
                          </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Description
                          </Form.Label>
                          <FloatingLabel
                            controlId="floatingTextarea2"
                            //   label="Description"
                          >
                            <Form.Control
                              className="description"
                              ref={desRef}
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: "100px" }}
                            />
                          </FloatingLabel>
                        </Form.Group>

                        <div className="d-grid">
                          <Button
                            onClick={addExpenseHandler}
                            variant="outline-success"
                            type="submit"
                            className="fw-bolder"
                          >
                            Add Expense
                          </Button>
                        </div>
                        {!subscription && (
                          <div className="d-grid mt-2">
                            <Button
                              onClick={activatePremium}
                              variant="outline-info"
                              className="fw-bolder"
                            >
                              Activate Premium
                            </Button>
                          </div>
                        )}
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <ExpenseList className editExpense={editExpense} />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ExpenseForm;
