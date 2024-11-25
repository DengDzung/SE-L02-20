import "./PrinterInfo.scss";
import PrintIcon from "@mui/icons-material/Print";
import CircleIcon from "@mui/icons-material/Circle";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import { useNavigate } from "react-router-dom";

const PrinterInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="printerInfo">
      <div className="printerInfoHeader">
        <KeyboardReturnIcon
          className="returnIcon"
          onClick={() => navigate("/")}
        />
        <div className="printerReady" onClick={() => navigate("/printing")}>
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
            <InfoIcon />
            <h1>Thông tin sử dụng</h1>
          </div>
          <hr />
          <div className="printerInfoCardBody">
            <div>Thời gian in: 123</div>
            <div>Các loại tệp được phép sử dụng: Word, PDF, PNG...</div>
            <div>Trang A4: 30</div>
            <div>Trang A3: 30</div>
            <div>Trang A2: 30</div>
            <div>Trang A1: 30</div>
            <div>Trang A0: 30</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterInfo;
