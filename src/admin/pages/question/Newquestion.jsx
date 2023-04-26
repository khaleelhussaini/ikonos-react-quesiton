import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import Sidebar from "../../components/sidebar/Sidebar";
import { Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";
import "../../admin.css";

const options = [
  { value: "textarea", label: "Text Area" },
  { value: "paragragh", label: "Multiple Choice" },
  { value: "", label: "Drop Down" },
  { value: "", label: "Radio Buttons" },
  // { value: "paragragh", label: "Multiple Choice" },
  // { value: "paragragh", label: "Multiple Choice" },
];

class BatchParams extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   batchNumber: 1,
    // };
    //this.handleBatchNumChange = this.handleBatchNumChange.bind(this);
  }

  handleBatchNumChange = (e) => {
    this.set({ [e.target.name]: e.target.valu });
  };
  render() {
    return (
      <div className="mt-3">
        <label>Enter Your Quesiton Here</label>
        <textarea
          //onChange={this.handleBatchNumChange}
          placeholder="Textarea"
          className="form-control"
        ></textarea>
      </div>
    );
  }
}

class StreamingParams extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   maxHits: 1,
    // };
    //this.handleMaxHitsChange = this.handleMaxHitsChange.bind(this);
  }

  handleMaxHitsChange = (e) => {
    this.set({ [e.target.name]: e.target.valu });
  };
  render() {
    return (
      <div className="mt-3">
        <label>Your Quesiton</label>
        <input
          type="text"
          className="form-control"
          onChange={this.handleMaxHitsChange}
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
    );
  }
}

class Newquestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };

    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onChange = (e) => {
    this.set({ [e.target.name]: e.target.value });
    console.log([e.target.value]);
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log("Option selected: ", selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    console.log(selectedOption);
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
              <Row className="justify-content-md-center">
                <Col lg={7}>
                  <div className="main-card p-60">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Select Category</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          className="form-control"
                        >
                          <option>Open this select menu</option>
                          <option value="Persona">Persona</option>
                          <option value="Knowing the company">
                            Knowing the company{" "}
                          </option>
                          <option value="Pain with the content">
                            Pain with the content
                          </option>
                          <option value="Brand and writing guide identification">
                            Brand and writing guide identification
                          </option>
                          <option value="Brand Desig">Brand Desig</option>
                        </Form.Select>
                      </Form.Group>

                      {/* <Form.Group className="mb-3">
                        <Form.Label>Question</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Write Your Question"
                        />
                      </Form.Group> */}
                      <Form.Group className="mb-3">
                        <Form.Label>Select Question Type</Form.Label>
                        <fieldset>
                          <div>
                            <Select
                              value={selectedOption}
                              onChange={this.handleChange}
                              options={options}
                              placeholder="Select a jobType..."
                              isSearchable={options}
                            />
                          </div>
                        </fieldset>
                        <div>
                          {selectedOption &&
                          selectedOption.value === "textarea" ? (
                            <BatchParams />
                          ) : selectedOption &&
                            selectedOption.value === "paragragh" ? (
                            <StreamingParams />
                          ) : null}
                        </div>
                      </Form.Group>
                      <Button className="btn btn-new" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Newquestion;
