import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
function Sidebar(props) {
  return (
    <>
      <div className="sidebar">
        
        <div className="sidebar-nav">
          <ul>
            <li className="active">
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/question'>Question Bank</Link>
            </li>
            <li>
              <Link to='/category'>Category List</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
