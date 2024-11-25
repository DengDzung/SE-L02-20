import React from "react";
import "./Printing.scss";
import PrintIcon from "@mui/icons-material/Print";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";

const Printing = () => {
  const navigate = useNavigate();

  return (
    <div className="printing">
      <div className="printerInfoHeader">
        <KeyboardReturnIcon
          className="returnIcon"
          onClick={() => navigate("/printerInfo")}
        />
        <div className="printerReady">
          <PrintIcon />
          <div className="printerName">
            <h1>Canon M10</h1>
            <div className="printerStatus">
              <CircleIcon />
              <span>Sẵn sàng</span>
            </div>
          </div>
        </div>
        <h1 className="BKSmart">BKSmart</h1>
      </div>

      <div className="printing-service">
        {/* File Upload Section */}
        <section className="file-upload">
          <h2>Upload File</h2>
          <input type="file" accept=".pdf,.png,.jpg" />
          <p className="hint">Accepted formats: PDF, PNG, JPEG</p>
          <button className="preview-btn">Preview File</button>
        </section>

        {/* Print Specifications Section */}
        <section className="print-settings">
          <h2>Print Settings</h2>
          <div className="setting">
            <label>Page Size:</label>
            <select>
              <option value="A4">A4</option>
              <option value="A3">A3</option>
              <option value="A2">A2</option>
              <option value="A1">A1</option>
              <option value="A0">A0</option>
            </select>
          </div>
          <div className="setting">
            <label>Number of Pages:</label>
            <input type="number" min="1" placeholder="Enter number of pages" />
          </div>
          <div className="setting">
            <label>Double-Sided:</label>
            <input type="checkbox" />
          </div>
          <div className="setting">
            <label>Number of Copies:</label>
            <input type="number" min="1" placeholder="Enter number of copies" />
          </div>
        </section>

        {/* Footer Actions */}
        <footer>
          <button>Submit Print Job</button>
          <button>Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default Printing;
