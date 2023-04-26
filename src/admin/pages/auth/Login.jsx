import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Login() {

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
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        Email address <span>*</span>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>
                        Password <span>*</span>
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
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
                    <Link to='/dashboard'>
                    <Button className="btn btn-login" type="submit">
                      Submit
                    </Button>
                    </Link>
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
