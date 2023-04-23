import React from "react";
import "./sidebar.css";
import { Image } from "react-bootstrap";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
function Sidebar(props) {
  return (
    <>
      <div className="sidebar">
        <div className="main-logo">
          <Image src={logo} rounded /> ADMIN PANEL
        </div>
        <div className="sidebar-nav">
          <ul>
            <li className="active">
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/question'>Question Bank</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
