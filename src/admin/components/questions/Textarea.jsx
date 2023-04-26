import React from "react";
import { Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
function Textarea() {
  return (
    <div>
      <div className="mt-3">
        <label>Your Quesiton</label>
        <input type="text" placeholder="Enter Your Text Here" className="form-control" />
      </div>
    </div>
  );
}

export default Textarea;
