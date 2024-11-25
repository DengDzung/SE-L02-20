import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
const LoginAdmin = () => {
  return (
    <div className="loginAdmin">
      <div className="card">
        <div className="leftCard">
          <h1>BKSmart</h1>
          <h2>
            Trang web in ấn đáng tin cậy của sinh viên Trường Đại Học Bách Khoa
            TPHCM
          </h2>
          <span>Nếu bạn là sinh viên</span>
          <Link to="/loginSV">
            <button>Student</button>
          </Link>
        </div>
        <div className="rightCard">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
