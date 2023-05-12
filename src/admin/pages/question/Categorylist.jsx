import React, { useState, useMemo } from "react";
import "../../admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  Row,
  Col,
  Button,
  Breadcrumb,
  Modal,
  Image,
  Form,
  Table,
} from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import waringimg from "../../../assets/images/warning.png";
import { useTable } from "react-table";
import { CiCircleMore } from "react-icons/ci";
import { BsTrash3, BsPrinter, BsPlusCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
function Question() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [qusShow, setQusShow] = useState(false);
  function QuestionTable({ data }) {
    const columns = React.useMemo(
      () => [
        {
          Header: "#",
          accessor: "srno",
        },
        {
          Header: "Question Category",
          accessor: "category",
        },
        {
          Header: "No of Questions",
          accessor: "numQuestions",
        },
        {
          Header: "Action",
          accessor: "action",
        },
      ],
      []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });

    return (
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  const data = [
    {
      id: "1",
      srno: "1",
      category: "Knowing the company",
      numQuestions: 9,
      action: (
        <>
          <button className="btn btn-view">
            <CiCircleMore />
          </button>{" "}
          <button className="btn btn-edit" onClick={() => setSmShow(true)}>
            <FiEdit />
          </button>{" "}
          <button className="btn btn-trash" onClick={() => setLgShow(true)}>
            <BsTrash3 />
          </button>
        </>
      ),
    },
    {
      id: "2",
      srno: "2",
      category: "Pain with the content",
      numQuestions: 8,
      action: (
        <>
          <button className="btn btn-view">
            <CiCircleMore />
          </button>{" "}
          <button className="btn btn-edit" onClick={() => setSmShow(true)}>
            <FiEdit />
          </button>{" "}
          <button className="btn btn-trash" onClick={() => setLgShow(true)}>
            <BsTrash3 />
          </button>
        </>
      ),
    },
    {
      id: "3",
      srno: "3",
      category: "Brand and writing guide identification",
      numQuestions: 12,
      action: (
        <>
          <button className="btn btn-view">
            <CiCircleMore />
          </button>{" "}
          <button className="btn btn-edit" onClick={() => setSmShow(true)}>
            <FiEdit />
          </button>{" "}
          <button className="btn btn-trash" onClick={() => setLgShow(true)}>
            <BsTrash3 />
          </button>
        </>
      ),
    },
    {
      id: "4",
      srno: "4",
      category: "Brand Design",
      numQuestions: 5,
      action: (
        <>
          <button className="btn btn-view">
            <CiCircleMore />
          </button>{" "}
          <button className="btn btn-edit" onClick={() => setSmShow(true)}>
            <FiEdit />
          </button>{" "}
          <button className="btn btn-trash" onClick={() => setLgShow(true)}>
            <BsTrash3 />
          </button>
        </>
      ),
    },
  ];
  return (
    <div className="dashboard">
      <Row>
        <Topbar></Topbar>
        <Col xs lg={2} className="p-0">
          <Sidebar></Sidebar>
        </Col>
        <Col xs lg={10} className="p-0">
          <div className="main-body">
            <div className="main-card">
              <Row className="justify-content-end">
                <Col lg={9}>
                  <Breadcrumb>
                    <Breadcrumb.Item active>Category List</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                {/* <Col className="pr-02">
                <Button className="btn btn-new-category"><BsPlusCircle /> Add New Question</Button>
                </Col> */}
                <Col className="pl-02 pr-02">
                  <Button
                    className="btn btn-new-qus"
                    onClick={() => setQusShow(true)}
                  >
                    <BsPlusCircle /> Add New Category
                  </Button>
                </Col>
                <Col lg={1} className="pl-02 me-auto">
                  <Button className="btn btn-print">
                    <BsPrinter />
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="main-card">
              <QuestionTable data={data} />
              <Modal
                centered
                show={smShow}
                size="lg"
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                    Edit Category
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form className="question-form">
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

                    <Button className="btn btn-new" type="submit">
                      Submit
                    </Button>
                  </Form>
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
                      Do you really want to delete this record? <br /> This
                      process cannot be undone.
                    </h5>
                    <Button className="cancel-delete" closeButton>
                      Cancel
                    </Button>
                    <Button className="confirm-delete">Delete</Button>
                  </div>
                </Modal.Body>
              </Modal>
              <Modal
                centered
                show={qusShow}
                size="lg"
                onHide={() => setQusShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Add Category
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form className="question-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Type Question Category</Form.Label>
                      <input type="text" className="form-control" placeholder="Type Question Category" />
                    </Form.Group>

                    <Button className="btn btn-new" type="submit">
                      Add
                    </Button>
                  </Form>
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
