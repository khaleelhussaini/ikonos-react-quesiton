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
                    <Breadcrumb.Item
                        linkAs={Link}
                        linkProps={{ to: "/dashboard" }}
                      >
                        Dashboard
                      </Breadcrumb.Item>
                      <Breadcrumb.Item
                        linkAs={Link}
                        linkProps={{ to: "/question" }}
                      >
                        Question List
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>Edit Question</Breadcrumb.Item>
                    </Breadcrumb>
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
                          {selectedOption &&
                          selectedOption.value === "textarea" ? (
                            <Textarea />
                          ) : selectedOption &&
                            selectedOption.value === "multiplechoice" ? (
                            <Multiplechoice/>
                          ) : selectedOption &&
                          selectedOption.value === "dropdown" ? (
                          <Dropdown/>
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

export default Editquestion;
