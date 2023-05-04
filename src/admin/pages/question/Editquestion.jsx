import React from "react";
import Select from "react-select";
import Sidebar from "../../components/sidebar/Sidebar";
import { Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import "../../admin.css";
import Dropdown from "../../components/questions/Dropdown";
import Multiplechoice from "../../components/questions/Multiplechoice";
import Textarea from "../../components/questions/Textarea";
import { Link } from "react-router-dom";

const options = [
  { value: "textarea", label: "Text Area" },
  { value: "multiplechoice", label: "Multiple Choice" },
  { value: "dropdown", label: "Drop Down" },
  { value: "", label: "Radio Buttons" },
  // { value: "paragragh", label: "Multiple Choice" },
  // { value: "paragragh", label: "Multiple Choice" },
];
class Editquestion extends React.Component {
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
        <Form className="question-form">
        <Form.Group className="mb-3">
            <Form.Label>Select Industry</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="form-control"
            >
              <option>Open this select menu</option>
              <option value="Persona">Industry 1</option>
              <option value="Knowing the company">Industry 2 </option>
              <option value="Pain with the content">
              Industry 3
              </option>
            
             
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="form-control"
            >
              <option>Open this select menu</option>
              <option value="Persona">Persona</option>
              <option value="Knowing the company">Knowing the company </option>
              <option value="Pain with the content">
                Pain with the content
              </option>
              <option value="Brand and writing guide identification">
                Brand and writing guide identification
              </option>
              <option value="Brand Desig">Brand Desig</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Input Type</Form.Label>
            <div>
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder="Select a jobType..."
                isSearchable={options}
                className="form-control-select"
              />
            </div>
            <div>
            <div className="mt-3">
        <label>Your Quesiton</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Quesiton Here"
          value=' How big is the organization?	'
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
                value="Very Big"
              />
            </div>
          </Col>
          <Col lg="6">
            <div className="mt-3">
              <label>Option B</label>
              <input
                type="text"
                className="form-control"
                //onChange={this.handleMaxHitsChange}
                placeholder="Option A"
                value='Big'
              />
            </div>
          </Col>
          <Col lg="6">
            <div className="mt-3">
              <label>Option C</label>
              <input
                type="text"
                className="form-control"
                //onChange={this.handleMaxHitsChange}
                placeholder="Option A"
                value="Medium"
              />
            </div>
          </Col>
          <Col lg="6">
            <div className="mt-3">
              <label>Option D</label>
              <input
                type="text"
                className="form-control"
                //onChange={this.handleMaxHitsChange}
                placeholder="Option A"
                value="Small"
              />
            </div>
          </Col>
        </Row>
      </div>
            </div>
          </Form.Group>
          <Button className="btn btn-new" type="submit">
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default Editquestion;
