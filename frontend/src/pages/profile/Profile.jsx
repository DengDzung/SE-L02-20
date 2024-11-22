import React from "react";
import "./Profile.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Nhập biểu tượng
import InfoIcon from "@mui/icons-material/Info"; // Nhập biểu tượng chữ i

const Profile = () => {
  return (
    <div className="my-account">
      <h1>Tài Khoản Của Tôi</h1>

      <div className="table-container">
        <h2>
          <AccountCircleIcon style={{ marginRight: "8px", fontSize: "30px" }} />{" "}
          {/* Thêm biểu tượng */}
          <i className="fas fa-user-graduate"></i> Thông Tin Sinh Viên
        </h2>
        <table>
          <tbody>
            <tr>
              <td>
                <div>Mã Số sinh viên: 2211618</div>
                <div>Họ và Tên sinh viên: Nguyễn Đăng Khoa</div>
                <div>Khoa: Khoa học và kỹ thuật máy tính</div>
                <div>Chuyên ngành: Khoa học máy tính</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h2>
          <InfoIcon style={{ marginRight: "8px", fontSize: "30px" }} />{" "}
          {/* Thêm biểu tượng chữ i */}
          Thông Tin Sử Dụng{" "}
        </h2>
        <table>
          <tbody>
            <tr>
              <td>
                <div>Trang in: 48</div>
                <div>Thời Gian sử dụng: 512</div>
                <div>Trang mặc định: 12</div>
                <div>Ngày: 12/10/2024</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
