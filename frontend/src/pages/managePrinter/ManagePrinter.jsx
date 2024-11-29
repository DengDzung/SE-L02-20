import React from "react";
import "./ManagePrinter.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ManagePrinter = () => {
  const [printers, setPrinters] = useState([])
  const [status,setStatus] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    fetch("http://localhost:5050/api/printers/all",{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
    .then(res=>res.json())
    .then(json =>{
      const printerList = json.printers
      setPrinters(printerList)
    })
    .catch(err=>{
      console.log(err)
    })
  },[status])

  const handleStatusChange = (id) => {
    const printer = printers.find((p => p.printerId == id))
    const enable = !printer.enable
    fetch(`http://localhost:5050/api/printers/${id}}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body:JSON.stringify({enable : enable})
    })
    .then(res =>{
      if(res.status === 200){
        return res.json()
      }
    })
    .then(() =>{
      setStatus(!status)
    })
    .catch(err=>{
      console.log(err)
    })
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
              <th>Printer Brand</th>
              <th>Printer Model</th>
              <th>Location</th>
              <th>File Types</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {printers.length > 0 ? (
              printers.map((printer,index) => (
                <tr key={index}>
                  <td>{printer.printerId}</td>
                  <td>{printer.brand}</td>
                  <td>{printer.model}</td>
                  <td>{printer.buildingName}-{printer.roomNumber}</td>
                  <td>PDF</td>
                  <td>{printer.enable ? "Enable" : "Disable"}</td>
                  <td>
                    <button
                      onClick={() => handleStatusChange(printer.printerId)}
                      className="status-btn"
                    >
                      {printer.enable  ? "Disable" : "Enable"}
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
