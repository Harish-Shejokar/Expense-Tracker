import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const verifyEmailOnFireBase = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBnUt6SmiCjCExXs2Pb4ir_uwH5us-ho2w",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: localStorage.getItem("token"),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("email verified Ok");
        const data = await response.json()
        console.log(data);
      } else {
        console.log("email verified not Ok");
        console.log(response)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container fluid className="d-flex justify-content-between">
        <h1>Welcome to Expense Tracker</h1>
        <Button onClick={verifyEmailOnFireBase} variant="warning">
          Verify Email Id
        </Button>
        <p>
          Your Profile is Incomplete <Link to="/userdetails">Complete now</Link>
        </p>
      </Container>
    </div>
  );
};

export default Home;
