import React, { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
export default (props) => {
  const [Persona, setPersona] = useState("");
  return (
    <div>
      <Row>
        <label>Persona</label>
        <Col>
          <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              label="CMO"
              onChange={e => setPersona(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              label="Head of Marketing"
              onChange={e => setPersona(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              label="Head of Creatives"
              onChange={e => setPersona(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  );
};
