import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPrinter.scss";

const AddPrinter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    location: "",
    fileTypes: "", 
    enable: true, // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "enable" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Implement API call here to save the new printer
  };

  const handleCancel = () => {
    navigate("/printer-management"); 
  };

  return (
    <div className="add-printer-page">
      <header className="add-printer-header">
        <h1>Add New Printer</h1>
        <button onClick={handleCancel} className="cancel-btn">
          Cancel
        </button>
      </header>

      <form onSubmit={handleSubmit} className="add-printer-form">
        <div className="form-group">
          <label htmlFor="brand">Printer Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            placeholder="Nhập hãng của máy in..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="model">Printer Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
            placeholder="Nhập model của máy in..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Vị trí máy in</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.buildingName}
            onChange={handleChange}
            required
            placeholder="Nhập ví trị đặt máy in..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="fileTypes">File Types</label>
          <input
            type="text"
            id="fileTypes"
            name="fileTypes"
            value={formData.fileTypes}
            onChange={handleChange}
            required
            placeholder="Nhập các loại file được in..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="enable">Status</label>
          <select
            id="enable"
            name="enable"
            value={formData.enable.toString()}
            onChange={handleChange}
            required
          >
            <option value="true">Enable</option>
            <option value="false">Disable</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Add Printer
        </button>
      </form>
    </div>
  );
};

export default AddPrinter;
