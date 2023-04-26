import React from "react";
import { Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
function Multiplechoice() {
  return (
    <div>
      <div className="mt-3">
        <label>Your Quesiton</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Quesiton Here"
        />
        <Row>
          <Col lg="6">
            <div className="mt-3">
              <label>Option A</label>
              <input
                type="text"
                className="form-control"
                //onChange={this.handleMaxHitsChange}
                placeholder="Option A"
              />
            </div>
          </Col>
          <Col lg="6">
            <div className="mt-3">
              <label>Option A</label>
              <input
                type="text"
                className="form-control"
                //onChange={this.handleMaxHitsChange}
                placeholder="Option A"
              />
            </div>
          </Col>
          <Col lg="6">
            <div className="mt-3">
              <label>Option A</label>
              <input
                type="text"
                className="form-control"
                //onChange={this.handleMaxHitsChange}
                placeholder="Option A"
              />
            </div>
          </Col>
          <Col lg="6">
            <div className="mt-3">
              <label>Option A</label>
              <input
                type="text"
                className="form-control"
                //onChange={this.handleMaxHitsChange}
                placeholder="Option A"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Multiplechoice;
