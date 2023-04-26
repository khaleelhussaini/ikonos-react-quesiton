import React from "react";
import "../../admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Row, Col, Button, Breadcrumb } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import MultiStep from "react-multistep";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
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
              {/* <MultiStep
                activeStep={0}
                prevButton={{
                  style: { background: "red" },
                  title: "prev step",
                }}
              >
                <StepOne title="Persona" />
                <StepTwo title="Knowing the company " />
                <StepThree title="Pain with the content" />
                <StepFour title="Brand and writing guide identification" />
                <StepFour title="Brand Design" />
              </MultiStep> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Question;
