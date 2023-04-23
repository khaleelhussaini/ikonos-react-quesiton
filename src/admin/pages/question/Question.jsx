import React from "react";
import "../../admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Row, Col, Table, Button } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import MultiStep from "react-multistep";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
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
              <MultiStep
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
              </MultiStep>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Question;
