import React, { useState, useMemo } from "react";
import "../../admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import NewQuestion from "./Newquestion";
import EditQuestion from "./Editquestion";
import {
  Row,
  Col,
  Button,
  Breadcrumb,
  Modal,
  Image,
  Table,
} from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";
import waringimg from "../../../assets/images/warning.png";
import { useTable, useExpanded, usePagination } from "react-table";
import { CiCircleMore } from "react-icons/ci";
import { BsTrash3, BsPrinter, BsPlusCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
// import { useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
function Question() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [qusShow, setQusShow] = useState(false);

  const columns = [
    {
      Header: "#",
      accessor: "srno",
    },
    {
      Header: "Question Categories",
      accessor: "category",
      Cell: ({ row }) => (
        <span {...row.getToggleRowExpandedProps()}>
          {row.depth === 0 && (row.isExpanded ? "-" : "+")}{" "}
          {row.original.category}
        </span>
      ),
    },
    {
      Header: "Questions",
      accessor: "question",
    },
    {
      Header: "Input Type",
      accessor: "inputType",
    },
    {
      Header: "Action",
      accessor: "action",
    },
  ];
  

  const data = [
    {
      srno: "1",
      category: (
        <>
          Knowing the company <span className="count">4</span>
        </>
      ),
      question: "1) How big is the organization?",
      inputType: "Multiple Choice",
      action: (
        <>
          <button className="btn btn-view" >
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
      subRows: [
        {
          empty: "",
          question: "2) What is the core product",
          inputType: "Paragragh",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
        {
          empty: "",
          question: "3) Who are you selling it to",
          inputType: "Drop down",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
        {
          empty: "",
          question: "4) What is the primary industry",
          inputType: "Drop down",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
      ],
    },

    {
      srno: "2",
      category: (
        <>
          Pain with the content <span className="count">4</span>
        </>
      ),
      question: "1) How much content do you produce in a week. Feel free to provide a number for each type of content",
      inputType: "Number range",
      action: (
        <>
          <button className="btn btn-view" >
            <CiCircleMore />
          </button>{" "}
          <button className="btn btn-edit">
            <FiEdit />
          </button>{" "}
          <button className="btn btn-trash" onClick={() => setLgShow(true)}>
            <BsTrash3 />
          </button>
        </>
      ),
      subRows: [
        {
          empty: "",
          question: "2) How many content writers do you have in your team",
          inputType: "Number range",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
        {
          empty: "",
          question: "3) How much lead time does it take them on an average to create this from soup to nuts",
          inputType: "Number range",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
        {
          empty: "",
          question: "4) How many editing cycles do you go through?",
          inputType: "Number range",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
      ],
    },

    {
      srno: "3",
      category: (
        <>
          Brand & writing guide identification <span className="count">4</span>
        </>
      ),
      question: "1) What is your brand voice /style - choose from options",
      inputType: "Choice",
      action: (
        <>
          <button className="btn btn-view" >
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
      subRows: [
        {
          empty: "",
          question: "2) What's your mission statement",
          inputType: "Long Text",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
        {
          empty: "",
          question: "3) Please upload your logo? What does your logo denote?",
          inputType: "Select File",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
        {
          empty: "",
          question: "4) Who is your ICP or buyer persona?",
          inputType: "Multiple choice",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
      ],
    },
    {
      srno: "4",
      category: (
        <>
          Brand Design <span className="count">5</span>
        </>
      ),
      question: "1) Upload your logo",
      inputType: "Select file",
      action: (
        <>
          <button className="btn btn-view" >
            <CiCircleMore />
          </button>{" "}
          <button className="btn btn-edit">
            <FiEdit />
          </button>{" "}
          <button className="btn btn-trash" onClick={() => setLgShow(true)}>
            <BsTrash3 />
          </button>
        </>
      ),
      subRows: [
        {
          empty: "",
          question: "2) Upload a few of your assets for social media",
          inputType: "Select file",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
        {
          empty: "",
          question: "3) Upload a few of your web graphics",
          inputType: "Select File",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
        {
          empty: "",
          question: "4) Upload a few of your assets from email campaigns",
          inputType: "Select file",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
        {
          empty: "",
          question: "5) Upload any videos",
          inputType: "Select file",
          action: (
            <>
              <button className="btn btn-view">
                <CiCircleMore />
              </button>{" "}
              <button className="btn btn-edit">
                <FiEdit />
              </button>{" "}
              <button className="btn btn-trash" onClick={() => setLgShow(true)}>
                <BsTrash3 />
              </button>
            </>
          ),
        },
      ],
    },

    // Add more data rows here
  ];
  
  const Table = () => {
    const tableInstance = useTable({ columns, data }, useExpanded);

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state: { expanded },
    } = tableInstance;

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
              <>
                <tr {...row.getRowProps()} className="questions-table">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
                {/* Render the expanded row if it is currently expanded */}
                {/* {row.isExpanded ? (
                  <tr >
                    <td colSpan={columns.length}>
                       You can render additional data for the expanded row here
                    </td>
                  </tr>
                ) : null} */}
              </>
            );
          })}
        </tbody>
      </table>
    );
  };

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
                    <Breadcrumb.Item active>Question List</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                {/* <Col className="pr-02">
                <Button className="btn btn-new-category"><BsPlusCircle /> Add New Question</Button>
                </Col> */}
                <Col className="pl-02 pr-02">
                <Button className="btn btn-new-qus" onClick={() => setQusShow(true)}><BsPlusCircle /> Add New Question</Button>
                </Col>
                <Col lg={1} className="pl-02 me-auto">
                <Button className="btn btn-print"><BsPrinter/></Button>
                </Col>
              </Row>
            </div>
            <div className="main-card">
              <Table />
              <Modal
                centered
                show={smShow}
                size="lg"
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                    Edit Question
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EditQuestion />
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
                   Add Question
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NewQuestion />
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
