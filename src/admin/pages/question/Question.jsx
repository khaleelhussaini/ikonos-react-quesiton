import React, { useState } from "react";
import "../../admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Row, Col, Button, Breadcrumb, Table, Modal, Image } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import { Link, NavLink } from "react-router-dom";
import { CiCircleMore } from "react-icons/ci";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import waringimg from '../../../assets/images/warning.png'
function Question() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
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
            <div className="main-card">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Question Categogry</th>
                    <th>Question</th>
                    <th>Input Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Knowing the company </td>
                    <td>How big is the organization</td>
                    <td>Multiple Choice</td>
                    <td>
                      <Link className="q-view" onClick={() => setSmShow(true)}>
                        <CiCircleMore />
                      </Link>
                      <Link to="/edit-question" className="q-edit">
                        <AiOutlineEdit />
                      </Link>
                      <Link
                        className="q-delete"
                        onClick={() => setLgShow(true)}
                      >
                        <BsTrash />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Pain with the content</td>
                    <td>
                      How much content do you produce in a week. Feel free to
                      provide a number for each type of content
                    </td>
                    <td>Number Range</td>
                    <td>
                      <Link className="q-view" onClick={() => setSmShow(true)}>
                        <CiCircleMore />
                      </Link>
                      <Link to="/edit-question" className="q-edit">
                        <AiOutlineEdit />
                      </Link>
                      <Link
                        className="q-delete"
                        onClick={() => setLgShow(true)}
                      >
                        <BsTrash />
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Knowing the company </td>
                    <td>Is your audience technical/business or both</td>
                    <td>Yes / No</td>
                    <td>
                      <Link className="q-view" onClick={() => setSmShow(true)}>
                        <CiCircleMore />
                      </Link>
                      <Link to="/edit-question" className="q-edit">
                        <AiOutlineEdit />
                      </Link>
                      <Link
                        className="q-delete"
                        onClick={() => setLgShow(true)}
                      >
                        <BsTrash />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Brand Design </td>
                    <td>Upload a few of your assets for social media</td>
                    <td>File Upload</td>
                    <td>
                      <Link className="q-view" onClick={() => setSmShow(true)}>
                        <CiCircleMore />
                      </Link>
                      <Link to="/edit-question" className="q-edit">
                        <AiOutlineEdit />
                      </Link>
                      <Link
                        className="q-delete"
                        onClick={() => setLgShow(true)}
                      >
                        <BsTrash />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <Modal
                centered
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                    View Question
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>
                    {" "}
                    <span>Q.</span> How big is the organization{" "}
                  </h4>
                  <p>
                    <b>Options</b> <br />
                    <span>A.</span> Big
                    <br />
                    <span>B.</span> Medium
                    <br />
                    <span>C.</span> Small
                    <br />
                    <span>D.</span> StartUp
                    <br />
                  </p>
                </Modal.Body>
              </Modal>
              <Modal
                centered
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                  Confirm delete
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="delete-quesiton text-center">
                    <Image src={waringimg} />
                    <h5>
                      Do you really want to delete this record? <br/> This process cannot be undone.
                    </h5>
                    <Button className="cancel-delete" closeButton>Cancel</Button>
                    <Button className="confirm-delete">Delete</Button>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Question;
