import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

export default () => {
  const [size, setSize] = useState("");

  return (
    <div>
      <Row>
        <Col md="4">
          <h4>How big is the organization</h4>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                label="Small"
                onChange={(e) => setSize(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Medium"
                onChange={(e) => setSize(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Big"
                onChange={(e) => setSize(e.target.value)}
              />
            </Col>
          </Row>
        </Col>
        <Col md="4">
          <h4>What is the core product</h4>
          <textarea className="form-control" placeholder="Write about your products"></textarea>
        </Col>
        <Col md="4">
          <h4>Who are you selling it to</h4>
          <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        </Col>
      </Row>
    </div>
  );
};
