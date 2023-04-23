import React from "react";
import "./topbar.css";
import { Col, Row, Dropdown, Image } from "react-bootstrap";
import userimg from '../../../assets/images/user.png'
function Topbar() {
  return (
    <div>
      <div className="topbar">
        <Row>
          <Col xs md={8} lg={10}></Col>
          <Col xs md={4} lg={2}>
            <Dropdown>
              <Dropdown.Toggle  id="dropdown-basic">
                <Image src={userimg} roundedCircle />
                Syed Khaleel
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Topbar;
