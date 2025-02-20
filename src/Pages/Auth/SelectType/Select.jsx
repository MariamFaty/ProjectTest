import React from "react";
import "./Select.css";
import Logo from "../../../assets/images/images-Select/Group.png";
import SuperAdmin from "../../../assets/Icons/Vector (1).png";
import Admin from "../../../assets/Icons/Vector (2).png";
import Teacher from "../../../assets/Icons/teacher.png";
import Student from "../../../assets/Icons/Vector (3).png";
import { useNavigate } from "react-router-dom";

export default function Select() {
  const navigate = useNavigate();
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card custom-card w-100 p-4">
        <div className="card-header border-0 bg-white">
          <img src={Logo} alt="Logo" className="mb-3" />
        </div>
        <div className="card-body">
          <h3 className="fw-bold ">Select User Type</h3>
          <div className="line my-auto mb-4"></div>
          <div className="d-flex justify-content-center gap-3 px-3">
            <div
              className="custom-box d-flex flex-column align-items-center text-center"
              onClick={() => navigate("/LoginSuberAdmin")}
              style={{ cursor: "pointer" }}
            >
              <img src={SuperAdmin} alt="Super Admin" className="icon mb-2" />
              <p className="fw-bold">Super Admin</p>
            </div>
            <div
              className="custom-box d-flex flex-column align-items-center text-center"
              onClick={() => navigate("/LoginAdmin")}
              style={{ cursor: "pointer" }}
            >
              <img src={Admin} alt="Admin" className="icon mb-2" />
              <p className="fw-bold">Admin</p>
            </div>
            <div
              className="custom-box d-flex flex-column align-items-center text-center"
              onClick={() => navigate("/LoginTeacher")}
              style={{ cursor: "pointer" }}
            >
              <img src={Teacher} alt="Teacher" className="icon mb-2" />
              <p className="fw-bold">Teacher</p>
            </div>
            <div
              className="custom-box active d-flex flex-column align-items-center text-center"
              onClick={() => navigate("/LoginStudent")}
              style={{ cursor: "pointer" }}
            >
              <img src={Student} alt="Student" className="icon mb-2" />
              <p className="fw-bold">Student</p>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn btn-info rounded-pill px-5 my-5 text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
