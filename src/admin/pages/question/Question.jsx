import React from "react";
import "../../admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Row, Col, Button, Breadcrumb, Table } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";
function Question() {
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
            <div className="main-card">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Question Categogry</th>
                    <th>Question</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                 
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Question;
