import "./Login.scss";
import { Link } from "react-router-dom";
const LoginSV = () => {
  return (
    <div className="loginSV">
      <div className="card">
        <div className="leftCard">
          <h1>BKSmart</h1>
          <h2>
            Trang web in ấn đáng tin cậy của sinh viên Trường Đại Học Bách Khoa
            TPHCM
          </h2>
          <span>Nếu bạn là quản trị viên</span>
          <Link to="/loginAdmin">
            <button>Admin</button>
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

export default LoginSV;
