import React from "react";
import "./ManagePrinter.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ManagePrinter = () => {
  const navigate = useNavigate();
  const [printers, setPrinters] = useState([
    {
      id: 1,
      printer: "Canon M10",
      printerID: "H660701",
      location: "H6-607",
      fileTypes: " PDF, PNG, JPEG",
      printedPages: "A0:1 A1:2 A3:4 A4:5",
      maintenance: "2024-11-21",
      status: "Active",
    },
    {
      id: 2,
      printer: "HP LaserJet",
      printerID: "H660701",
      location: "H6-607",
      fileTypes: " PDF, PNG, JPEG",
      printedPages: "A0:1 A1:2 A3:4 A4:5",
      maintenance: "2024-11-21",
      status: "Active",
    },
    {
      id: 3,
      printer: "Canon M10",
      printerID: "H660701",
      location: "H6-607",
      fileTypes: " PDF, PNG, JPEG",
      printedPages: "A0:1 A1:2 A3:4 A4:5",
      maintenance: "2024-11-20",
      status: "Inactive",
    },
  ]);

  const handleStatusChange = (id) => {
    setPrinters((prevPrinters) =>
      prevPrinters.map((printer) =>
        printer.id === id
          ? {
              ...printer,
              status: printer.status === "Active" ? "Inactive" : "Active",
            }
          : printer
      )
    );
  };

  const handleAddPrinter = () => {
    const newPrinter = {
      id: printers.length + 1,
      printer: "New Printer",
      printerID: `H6607${printers.length + 1}`,
      location: "Unknown Location",
      fileTypes: " PDF, PNG, JPEG",
      printedPages: "A0:0 A1:0 A3:0 A4:0",
      maintenance: new Date().toISOString().split("T")[0], // current date
      status: "Active",
    };

    setPrinters([...printers, newPrinter]);
  };

  const handleReturnToDashboard = () => {
    navigate("/dashboard"); // Redirect to the dashboard page
  };

  const handleConfigureFileTypes = () => {
    navigate("/configure-file-types"); // Redirect to the Configure File Types page
  };

  return (
    <div className="printer-management-page">
      <header className="printer-management-header">
        <h1>Printer Management</h1>
        <div className="actions">
          <button
            onClick={handleReturnToDashboard}
            className="return-to-dashboard-btn"
          >
            Return to Dashboard
          </button>
      
          <button
            onClick={handleConfigureFileTypes}
            className="configure-file-types-btn"
          >
            Configure File Types
          </button>
  
          <button onClick={handleAddPrinter} className="add-printer-btn">
            Add Printer
          </button>
        </div>
      </header>

      {/* Printer Table */}
      <section className="printer-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Printer</th>
              <th>Printer ID</th>
              <th>Location</th>
              <th>File Types</th>
              <th>Printed Pages</th>
              <th>Maintenance</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {printers.length > 0 ? (
              printers.map((printer) => (
                <tr key={printer.id}>
                  <td>{printer.id}</td>
                  <td>{printer.printer}</td>
                  <td>{printer.printerID}</td>
                  <td>{printer.location}</td>
                  <td>{printer.fileTypes}</td>
                  <td>{printer.printedPages}</td>
                  <td>{printer.maintenance}</td>
                  <td>{printer.status}</td>
                  <td>
                    <button
                      onClick={() => handleStatusChange(printer.id)}
                      className="status-btn"
                    >
                      {printer.status === "Active" ? "Disable" : "Enable"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No printers available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ManagePrinter;
