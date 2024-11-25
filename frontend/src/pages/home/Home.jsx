import "./Home.scss";
import PrintIcon from "@mui/icons-material/Print";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="homeHeader">
        <h1>Welcome to BKSmart</h1>
        <div className="homeUser">
          <div className="homeUserInfo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png"
              alt=""
            />
            <span>Nguyễn Đăng Khoa</span>
          </div>
          <span>Khoa học máy tính</span>
        </div>
      </div>

      <div className="homePrinter">
        <div className="homePrinterInfo">
          <div className="homePrinterInfoLogo">
            <PrintIcon style={{ fontSize: "50px" }} />
            <span>Máy in</span>
          </div>
          <span>H6 - 607</span>
        </div>

        <hr />

        <div className="homePrinterStatus">
          <div className="homePrinterStatusIcon">
            <h3>Máy in</h3>
            <div
              className="homePrinterStatusIconProfile"
              onClick={() => navigate("/printerInfo")}
            >
              <PrintIcon />
              <span>Canon M10</span>
            </div>
          </div>

          <div class="homeStatus">
            <h3>Trạng thái</h3>
            <div className="homeStatusIcon">
              <CircleIcon />
              <span>1 tài liệu sẵn sàng</span>
            </div>
          </div>

          <div class="homeStatus">
            <h3>Tình trạng</h3>
            <div className="homeStatusIcon">
              <CircleIcon />
              <span>Có thể hoạt động</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
