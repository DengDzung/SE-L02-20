import React from "react";
import "./PrintRequire.scss";
import { useNavigate } from "react-router-dom";

const PrintRequire = () => {
  const navigate = useNavigate();
  const printRequests = [
    {
      id: 1,
      student: "John Doe",
      mssv: "2211620",
      printer: "Canon M10",
      fileType: "PDF",
      pageSize: "A4",
      numPages: 10,
      doubleSided: "Yes",
      numCopies: 2,
    },
    {
      id: 2,
      student: "Jane Smith",
      mssv: "2211621",
      printer: "HP LaserJet",
      fileType: "PNG",
      pageSize: "A3",
      numPages: 5,
      doubleSided: "No",
      numCopies: 1,
    },
    {
      id: 3,
      student: "Samuel Lee",
      mssv: "2211622",
      printer: "Canon M10",
      fileType: "JPEG",
      pageSize: "A4",
      numPages: 8,
      doubleSided: "Yes",
      numCopies: 3,
    },
  ];
  return (
    <div className="print-require-page">
      <div className="header">
        <button
          className="return-dashboard-btn"
          onClick={() => navigate("/dashboard")}
        >
          Return to Dashboard
        </button>
      </div>

      <div className="table-container">
        <h2>Print Requests</h2>
        <table className="print-requests-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>MSSV</th>
              <th>Máy In</th>
              <th>File Type</th>
              <th>Page Size</th>
              <th>Number of Pages</th>
              <th>Double-Sided</th>
              <th>Number of Copies</th>
              <th>Xác Nhận</th>
            </tr>
          </thead>
          <tbody>
            {printRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.student}</td>
                <td>{request.mssv}</td>
                <td>{request.printer}</td>
                <td>{request.fileType}</td>
                <td>{request.pageSize}</td>
                <td>{request.numPages}</td>
                <td>{request.doubleSided}</td>
                <td>{request.numCopies}</td>
                <td>
                  <button className="confirm-btn">Confirm</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrintRequire;
