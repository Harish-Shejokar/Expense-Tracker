import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ExpenseForm from "./Expense/ExpenseForm";
// import Background from "./Background";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../ReduxStore/Auth";
import { expenseAction } from "../../ReduxStore/Expense";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(authAction.Logintoken(localStorage.getItem("token")));
  dispatch(expenseAction.totalExpenseAmount());
  
  let email = "";
  if (localStorage.getItem("email") !== null) {
    email = localStorage.getItem("email");
    email = email.replace(/[^a-zA-Z0-9]/g, "");
  }

 
  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await axios.get(
        `https://expense-data-11e4b-default-rtdb.firebaseio.com/${email}.json`
      );

      let data = response.data;
      // console.log(data);
      if (data !== null) {
        let dataInArray = Object.values(data);
        let allKeys = Object.keys(data);
        // console.log(dataInArray)
        let expenses = [];
        dataInArray.map((item, index) => {
          const temp = { ...item, id: allKeys[index] };
          expenses.push(temp);
        });
        console.log(expenses);
        dispatch(expenseAction.allExpense(expenses));
        dispatch(expenseAction.totalExpenseAmount(expenses));
      }
    };
    fetchExpenses();

    // dispatch(fetchExpenses());
    // dispatch(expenseAction.totalExpenseAmount());
  }, []);

  //  console.log(totalExpenseFromRedux);

  // console.log(tokenFromRedux);
  

  return (
    <Container>
      <Container fluid className=" d-flex justify-content-around mt-4">
        <Row>
          <Col>
            <h1>Welcome to Expense Tracker</h1>
          </Col>
          {/* <Col md={4}>
            <Button
              className="ms-5"
              onClick={verifyEmailOnFireBase}
              variant="warning"
            >
              Verify Email Id
            </Button>
          </Col> */}

          {/* <Col md={4}>
            <h5 className="">
              Your Profile is Incomplete
              <Link to="/userdetails">Complete now</Link>
            </h5>
          </Col> */}
        </Row>
      </Container>

     

      <Row className="mt-3">
        <ExpenseForm />
      </Row>
      {/* <Background /> */}
    </Container>
  );
};

export default Home;
