import React from "react";
import "./Truoc.scss";
import PrintIcon from "@mui/icons-material/Print";
import PersonIcon from "@mui/icons-material/Person";

import { Link } from "react-router-dom";

const Truoc = () => {
  return (
    <div className="login-container">
      <header className="header">
        <div className="landpageLogo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png"
            alt="Logo Bách Khoa"
            className="logo"
          />
          <span>BKSmart</span>
        </div>
        <h1 className="title">
          <PrintIcon className="printer-icon" /> Trung tâm in ấn Bách Khoa
        </h1>
        <Link to="/loginSV">
          <h2 className="login-text">
            <div className="login-wrapper">
              <PersonIcon className="user-icon" /> Đăng Nhập
            </div>
          </h2>
        </Link>
      </header>

      <div className="content-container">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1588829608082-df51eb07f6cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hình ảnh 2"
            className="secondary-image"
          />
        </div>

        <div className="slogan-container">
          <h2 className="slogan">
            "In ấn chất lượng, phục vụ tận tâm - Hỗ trợ sinh viên Bách Khoa!"
          </h2>
          <h2 className="slogan">
            "Cung cấp dịch vụ in ấn nhanh chóng và chất lượng trong từng bản
            in!"
          </h2>
          <img
            src="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hình ảnh 1"
            className="main-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Truoc;
