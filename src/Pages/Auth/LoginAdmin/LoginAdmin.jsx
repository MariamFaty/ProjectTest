import React from "react";
import "./LoginAdmin.css";
import Image from "../../../assets/images/images-Student/Frame 3.png";
import Logo from "../../../assets/images/images-Student/Group.png";
import Email from "../../../assets/Icons/Mail.png";
import Password from "../../../assets/Icons/Password.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
export default function LoginAdmin() {
  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="card custom-card p-4">
          <div className="row align-items-center">
            {/* صورة الجانب الأيسر */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img src={Image} alt="image" className="w-100 " />
            </div>

            {/* نموذج تسجيل الدخول */}
            <div className="col-12 col-md-6 d-flex flex-column text-center">
              <div className="logo mb-3">
                <img src={Logo} alt="logo" className="img-fluid" />
              </div>
              <div className="content">
                <h1>WELCOME ADMIN!</h1>
                <p>Access your personal account by logging in.</p>
              </div>
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <img src={Email} alt="email" className="Email" />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <img src={Password} alt="password" />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember Me
                    </label>
                  </div>
                  <p className="forgot-password">Forgot Password?</p>
                </div>

                <div>
                  <button className="btn btn-login border w-100 rounded-5 mt-4">
                    Login
                  </button>
                  <NavLink
                    to={"/"}
                    className="btn btn-Back mt-3 border w-100 rounded-5"
                  >
                    Back
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
