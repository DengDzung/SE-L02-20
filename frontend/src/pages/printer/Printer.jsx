import React from "react";
import PrintIcon from "@mui/icons-material/Print"; // Nhập biểu tượng máy in
import "./Printer.scss";

const Printer = () => {
  const printers = [
    {
      name: "Cannon M10",
      printerId: "H6-607",
      status: "Chọn",
    },
    {
      name: "Cannon R650",
      printerId: "H1-101",
      status: "Chọn",
    },
    {
      name: "Cannon M10",
      printerId: "H6-607",
      status: "Chọn",
    },
    {
      name: "Cannon M10",
      printerId: "H6-607",
      status: "Chọn",
    },
    {
      name: "Cannon M10",
      printerId: "H6-607",
      status: "Chọn",
    },
  ];

  return (
    <div className="printer">
      <h1>Danh Sách Máy In</h1>
      <div className="printer-list">
        {printers.map((printer, index) => (
          <div key={index} className="printer-item">
            <PrintIcon className="printer-icon" /> {/* Biểu tượng máy in */}
            <span className="printer-name">{printer.name}</span>
            <span className="printer-id">{printer.printerId}</span>
            <span className="printer-status">{printer.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Printer;
