import "./Home.scss";
import PrintIcon from "@mui/icons-material/Print";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Home = () => {
  const navigate = useNavigate();
  const [student,setStudent] = useState({
    studentId: "",
    name: "",
    faculity: "",
    major: "",
    email: "",
    pageBalance: 0,
  })
  useEffect(() =>{
    fetch("http://localhost:5050/api/students/",{
      method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
    .then(res => res.json())
    .then(json =>{
      const studentInfo = json.student
      setStudent({
        studentId: studentInfo.studentId,
        name: studentInfo.name,
        faculity: studentInfo.faculity,
        major: studentInfo.major,
        email: studentInfo.email,
        pageBalance: studentInfo.pageBalance,
      })
    })
    .catch(err =>{
      console.log(err)
    })
  },[])
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
            <span>{student.name}</span>
          </div>
          <span>{student.faculity}</span>
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

          <div className="homeStatus">
            <h3>Trạng thái</h3>
            <div className="homeStatusIcon">
              <CircleIcon />
              <span>1 tài liệu sẵn sàng</span>
            </div>
          </div>

          <div className="homeStatus">
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
