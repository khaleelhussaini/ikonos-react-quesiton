import React, { useState } from "react";
import { Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import { RiDeleteBack2Fill } from 'react-icons/ri';

function Dropdown() {
  const [formFields, setFormFields] = useState([{ name: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      name: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

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
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <Row className="mt-3">
                  <Col lg="11">
                    <input
                      name="option"
                      placeholder="Option"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.name}
                      className="form-control"
                    />
                  </Col>
                  <Col lg="1">
                  <button className="btn btn-remove" onClick={() => removeFields(index)}><RiDeleteBack2Fill/></button>
                  </Col>
                </Row>
              </div>
            );
          })}
          <Button className="mt-3 btn btn-question-add" onClick={addFields}>
            {" "}
            Add New Option
          </Button>
        </Row>
      </div>
    </div>
  );
}

export default Dropdown;
