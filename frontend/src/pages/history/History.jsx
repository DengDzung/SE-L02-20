import React from "react";
import "./History.scss";

const History = () => {
  const printRecords = [
    {
      studentId: "2211618",
      fullName: "Nguyễn Đăng Khoa",
      printerId: "H660701",
      printTime: "01/01/2025 -13:05",
      quantity: "A0:1 A1:2 A3:4 A4:5",
    },
    {
      studentId: "2211618",
      fullName: "Nguyễn Đăng Khoa",
      printerId: "H660701",
      printTime: "01/01/2025 -13:05",
      quantity: "A0:1 A1:2 A3:4 A4:5",
    },
    {
      studentId: "2211618",
      fullName: "Nguyễn Đăng Khoa",
      printerId: "H660701",
      printTime: "01/01/2025 -13:05",
      quantity: "A0:1 A1:2 A3:4 A4:5",
    },
    {
      studentId: "2211618",
      fullName: "Nguyễn Đăng Khoa",
      printerId: "H660701",
      printTime: "01/01/2025 -13:05",
      quantity: "A0:1 A1:2 A3:4 A4:5",
    },
  ];

  return (
    <div className="history">
      <h1>Lịch Sử In</h1>
      <table>
        <thead>
          <tr>
            <th>Mã Số SV</th>
            <th>Họ và Tên SV</th>
            <th>Mã Số Máy In</th>
            <th>Thời Gian In</th>
            <th>Số Lượng</th>
          </tr>
        </thead>
        <tbody>
          {printRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.studentId}</td>
              <td>{record.fullName}</td>
              <td>{record.printerId}</td>
              <td>{record.printTime}</td>
              <td>{record.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
