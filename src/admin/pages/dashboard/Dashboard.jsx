import React from "react";
import "../../admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";

function Dashboard() {
  return (
    <div className="dashboard">
      <Row>
        <Col xs lg={2} className="p-0">
          <Sidebar></Sidebar>
        </Col>
        <Col xs lg={10} className="p-0">
          <div className="main-body">
            <Topbar></Topbar>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
