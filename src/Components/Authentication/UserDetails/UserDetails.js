import React, { useRef, useEffect, useState } from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
const UserDetails = () => {
  const tokenFromRedux = useSelector((state) => state.authentication.userToken);
  const theme = useSelector((state) => state.theme.currTheme);
  const bg = theme === "darkTheme" ? "dark" : "light";

  const nameRef = useRef();
  const photoRef = useRef();

  let [oldName, setName] = useState("");
  let [oldPhoto, setPhoto] = useState("");

  const getUserDataFromFireBase = async (token) => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBnUt6SmiCjCExXs2Pb4ir_uwH5us-ho2w",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("get User Data OK");
        const data = await response.json();
        console.log(data.users[0]);
        setName((prev) => data.users[0].displayName);
        setPhoto((prev) => data.users[0].photoUrl);
        console.log(oldName, oldPhoto);
      } else {
        console.log("signUp not OK");
        alert("Invalid Authentication");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserDataFromFireBase(localStorage.getItem("token"));
  }, []);

  const updateUserDetailsOnFireBase = async (name, photo) => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBnUt6SmiCjCExXs2Pb4ir_uwH5us-ho2w",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: localStorage.getItem("token"),
            displayName: name,
            photoUrl: photo,
            //  deleteAttribute: ["abcd", "abcd.jpg"],
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("update OK");
        const data = await response.json();
        console.log(data);
      } else {
        console.log("update not OK");
        //  alert("Invalid Authentication");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeDetailsHandler = () => {
    const name = nameRef.current.value;
    const photo = photoRef.current.value;

    updateUserDetailsOnFireBase(name, photo);
  };

  const verifyEmailOnFireBase = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBnUt6SmiCjCExXs2Pb4ir_uwH5us-ho2w",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: tokenFromRedux,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("email verified Ok");
        const data = await response.json();
        console.log(data);
      } else {
        console.log("email verified not Ok");
        throw response;
        // console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center mt-5 "
    >
      <Card
        bg={`${bg}`}
        className="p-4 fw-bold shadow-lg border border-info border-4"
      >
        <p className="display-5 text-center">Update Your Profile</p>
        <Form className="m-3">
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={oldName}
              type="text"
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Profile Url</Form.Label>
            <Form.Control
              value={oldPhoto}
              type="url"
              ref={photoRef}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </Form.Group>
          <Button
            onClick={changeDetailsHandler}
            className="w-100 mt-3"
            variant="outline-warning"
          >
            Update
          </Button>
          <Button
            className="w-100 mt-2"
            onClick={verifyEmailOnFireBase}
            variant="outline-danger"
          >
            Verify Email
          </Button>
        </Form>
      </Card>
    </Container>

    // <div>
    //   <Container className="d-flex justify-content-between mt-3">
    //     <h3>Contact Details</h3>
    //     <Button variant="outline-danger">Cancel</Button>
    //   </Container>
    //   <Container>
    //     <Row>
    //       <Col className="mt-3">
    //         <label className="lg-12 mx-2 ">Full Name</label>
    //         <input
    //           value={oldName}
    //           className="lg-12 mx-5"
    //           type="text"
    //           ref={nameRef}
    //           onChange={e => setName(e.target.value)}
    //         />

    //         <label className="lg-12 mx-2">Profile URL</label>
    //         <input
    //           value={oldPhoto}
    //           className="lg-12 mx-5"
    //           type="url"
    //           ref={photoRef}
    //           onChange={e => setPhoto(e.target.value)}
    //         />
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col className="mt-2">
    //         <Button onClick={changeDetailsHandler} variant="success">
    //           Update
    //         </Button>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};

export default UserDetails;
