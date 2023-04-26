import React from "react";
import "../../admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";
function Question() {
  const options = [
    { value: "batch", label: "Batch" },
    { value: "streaming", label: "Streaming" }
  ];
  return (
    <div className="dashboard">
      <Row>
        <Col xs lg={2} className="p-0">
          <Sidebar></Sidebar>
        </Col>
        <Col xs lg={10} className="p-0">
          <div className="main-body">
            <Topbar></Topbar>
            <div className="main-card">
              <Row>
                <Col lg={10}>
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item active>Question List</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                <Col>
                  <Link to="/new-question">
                    <Button className="btn btn-new">Add New Question</Button>
                  </Link>
                </Col>
              </Row>
            </div>
            <Row className="justify-content-md-center">
              <Col lg={5}>
                <div className="main-card p-60">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Select Category</Form.Label>
                      <Form.Select aria-label="Default select example" className="form-control">
                        <option>Open this select menu</option>
                        <option value="Persona">Persona</option>
                        <option value="Knowing the company">Knowing the company </option>
                        <option value="Pain with the content">Pain with the content</option>
                        <option value="Brand and writing guide identification">Brand and writing guide identification</option>
                        <option value="Brand Desig">Brand Desig</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Question</Form.Label>
                      <Form.Control type="text" placeholder="Write Your Question" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Select Question Type</Form.Label>
                      <Form.Select aria-label="Default select example" className="form-control">
                        <option>Open this select menu</option>
                        <option value="Persona">Text Area</option>
                        <option value="Knowing the company">Paragragh</option>
                        <option value="Pain with the content">Drop down</option>
                        <option value="Brand and writing guide identification">Radio buttons</option>
                        <option value="Brand Desig">Long Text</option>
                        <option value="Brand Desig">File</option>
                        <option value="Brand Desig">Number range</option>
                        <option value="Brand Desig">Yes/No</option>
                      </Form.Select>
                    </Form.Group>
                    <Button className="btn btn-new" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Question;
