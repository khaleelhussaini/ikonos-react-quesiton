import React from "react";
import "./topbar.css";
import { Col, Row, Dropdown, Image,  } from "react-bootstrap";
import userimg from "../../../assets/images/user.png";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import logo from "../../../assets/images/logo.svg";
function Topbar() {
  return (
    <div>
      <div className="topbar">
        <Row>
          <Col xs md={8} lg={10}>
            <div className="main-logo">
              <Image src={logo} rounded /> Admin Panel
            </div>
          </Col>
          <Col xs md={4} lg={2}>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <Image src={userimg} roundedCircle />
                Syed Khaleel
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <BiUser /> Profile
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/">
                    {" "}
                    <FiLogOut /> Logout
                  </Link>
                </Dropdown.Item>
                {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Topbar;
