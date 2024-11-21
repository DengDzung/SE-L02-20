import React from "react";
import { useNavigate } from "react-router-dom";
import "./Leftbar.scss";

import HomeIcon from "@mui/icons-material/Home";
import PrintIcon from "@mui/icons-material/Print";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import LogoutIcon from "@mui/icons-material/Logout";

const Leftbar = ({ isHidden }) => {
  const navigate = useNavigate();

  return (
    <div className={`leftBar ${isHidden ? "hidden" : ""}`}>
      <div className="leftBarContainer">
        <div className="leftBarMenu">
          <button className="leftBarItem" onClick={() => navigate("/")}>
            <HomeIcon />
            <span>Bảng điều khiển</span>
          </button>
          <button className="leftBarItem" onClick={() => navigate("/printer")}>
            <PrintIcon />
            <span>Máy in</span>
          </button>
          <button className="leftBarItem" onClick={() => navigate("/history")}>
            <ManageSearchIcon />
            <span>Lịch sử in</span>
          </button>
          <button className="leftBarItem" onClick={() => navigate("/profile")}>
            <AccountCircleIcon />
            <span>Trang cá nhân</span>
          </button>
          <button className="leftBarItem">
            <LogoutIcon />
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
