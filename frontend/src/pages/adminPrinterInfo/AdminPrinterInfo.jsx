import React from "react";
import "./AdminPrinterInfo.scss";
import PrintIcon from "@mui/icons-material/Print";
import CircleIcon from "@mui/icons-material/Circle";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import { useNavigate } from "react-router-dom";

const AdminPrinterInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="adminprinterInfo">
      <div className="printerInfoHeader">
        <KeyboardReturnIcon
          className="returnIcon"
          onClick={() => navigate("/printer-management")}
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
      <div className="printerInfoBody">
        <div className="printerInfoCard">
          <div className="printerInfoCardHeader">
            <SettingsIcon />
            <h1>Thông tin máy in</h1>
          </div>
          <hr />
          <div className="printerInfoCardBody">
            <div>Mã số máy in: H660701</div>
            <div>Tên máy in: Canon M10</div>
            <div>Mẫu mã máy in: VIP2004</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              Khả năng sử dụng :
              <CircleIcon
                style={{ fontSize: 20, color: "green", margin: "0 4px" }}
              />
              bình thường
            </div>
            <div>Địa chỉ: H6 - 607</div>
            <div>Máy in dành cho sinh viên sử dụng...</div>
          </div>
        </div>

        <div className="printerInfoCard">
          <div className="printerInfoCardHeader">
            <SettingsIcon />
            <h1>Printer Printing Logs</h1>
          </div>
          <hr />
          <div className="printerInfoCardBody">
          <section className="logs-section">
          <table>
            <thead>
              <tr>
                <th>Mã số SV</th>
                <th>Họ và tên SV</th>
                <th>Máy In</th>
                <th>Tên File</th>
                <th>Kích Cỡ</th>
                <th>Trang In</th>
                <th>Số Bảng Copy</th>
                <th>Số Lượng</th>
                <th>Trạng Thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>ocumeo.pdf</td>
                <td>PDF</td>
                <td>A4</td>
                <td>Yes</td>
                <td>120</td>
                <td>12/12/2024</td>
              </tr>

              <tr>
                <td>001</td>
                <td>toptruyen.doc</td>
                <td>PDF</td>
                <td>A4</td>
                <td>Yes</td>
                <td>120</td>
                <td>12/12/2024</td>
              </tr>
            </tbody>
          </table>
        </section>

        <footer className="printing-logs-footer">
          <p>
            Printing logs are updated regularly. Please check for recent
            activities.
          </p>
        </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPrinterInfo;
