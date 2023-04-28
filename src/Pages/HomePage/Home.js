import React from 'react'
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Container fluid className="d-flex justify-content-between">
        <h1>Welcome to Expense Tracker</h1>
        <p>
          Your Profile is Incomplete <Link to="/userdetails">Complete now</Link>
        </p>
      </Container>
    </div>
  );
}

export default Home
