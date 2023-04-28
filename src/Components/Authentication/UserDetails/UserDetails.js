import React,{useRef} from 'react'
import { Button, Container,Row,Col } from 'react-bootstrap'

const UserDetails = () => {
    const nameRef = useRef();
    const photoRef = useRef();

    const updateUserDetailsOnFireBase = async(name,photo) => {
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
                 returnSecureToken : true,
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
    }

    const changePasswordHandler = () => {
        const name = nameRef.current.value;
        const photo = photoRef.current.value;
        console.log(name, photo);

        updateUserDetailsOnFireBase(name, photo);
    }

  return (
    <div>
      <Container className="d-flex justify-content-between mt-3">
        <h3>Contact Details</h3>
        <Button variant="outline-danger">Cancel</Button>
      </Container>
      <Container>
        <Row>
          <Col className="mt-3">
            <label className="lg-12 mx-2 ">Full Name</label>
            <input className="lg-12 mx-5" type="text" ref={nameRef} />

            <label className="lg-12 mx-2">Profile URL</label>
            <input className="lg-12 mx-5" type="url" ref={photoRef}/>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">
            <Button onClick={changePasswordHandler} variant="success">
              Update
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserDetails
