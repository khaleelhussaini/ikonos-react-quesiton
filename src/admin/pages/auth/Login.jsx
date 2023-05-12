import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const users = [
  {
    username: "admin@gmail.com",
    password: "password",
  },
];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username is empty
    if (username === "") {
      setError("Please enter a username");
      return;
    }

    // Check if the password is empty
    if (password === "") {
      setError("Please enter a password");
      return;
    }

    // Check if the username and password match any of the users in the database
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      setIsAuthenticated(true);
      // Redirect to the dashboard page
      window.location.href = "/dashboard";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <div className="login">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <div className="login-card">
                <div className="login-header text-center">
                  <h2>Welcome Back !</h2>
                  <p>Sign in to continue to Admin Panel.</p>
                  <div className="brand-logo"></div>
                </div>
                <div className="login-form">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        Email address <span>*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>
                        Password <span>*</span>
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Row>
                      <Col>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Link to="/">Forgot Your Password?</Link>
                      </Col>
                    </Row>
                    <Button className="btn btn-login" type="submit">
                      Submit
                    </Button>
                    <p>{error}</p>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;


