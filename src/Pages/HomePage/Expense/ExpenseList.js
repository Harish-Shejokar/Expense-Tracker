import React from "react";
import {  Container, Col,} from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";
import { useSelector } from "react-redux";

const ExpenseList = (props) => {
  const dataFromRedux = useSelector((state) => state.expense.expenseData);

  const downloadExpensesHandler = () => {
    console.log(dataFromRedux);
    const data = [];
    dataFromRedux.map((item) => {
      const obj = {
        expense: item.expense,
        description: item.description,
        category: item.category,
      };
      const dataInStrings = JSON.stringify(obj);
      data.push(dataInStrings);
      // console.log(convertedData);
    });

    const blob1 = new Blob(data, { type: "text/txt" });
    let link = document.getElementById("download");
    link.href = URL.createObjectURL(blob1);
  };

  const theme = useSelector((state) => state.theme.currTheme);
  const bg = theme === "darkTheme" ? "dark" : "light";

  const style = { width: "20%", padding: ".5rem" };
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: `${bg}`,
          border: "4px solid cyan",
          borderRadius: "10px",
          padding: ".5rem",
        }}
        className="d-flex fw-bold mt-4 shadow-sm"
      >
        <Col className="text-center">Amount</Col>
        <Col className="text-center">Category</Col>
        <Col className="text-center">Description</Col>
        <Col className="text-center">Edit</Col>
        <Col className="text-center">Delete</Col>
      </Container>
      <Container
        fluid
        className="shadow-lg"
        style={{
          backgroundColor: `${bg}`,
          border: "4px solid cyan",
          borderRadius: "10px",
          padding: ".5rem",
        }}
      >
      
        {dataFromRedux.length <= 0 && <p className="text-center display-4">NO Expense</p>}
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
      
      </Container>
      {/* <Card bg={bg} className="mb-3 mt-3">
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
        <Container className="mb-2 text-center">

          <a
            id="download"
            download="file1.txt"
            onClick={downloadExpensesHandler}
          >
            download Expenses
          </a>
        </Container>
      </Card> */}
    </>
  );
};

export default ExpenseList;

