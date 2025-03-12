import React, { useContext, useState } from "react";
import Image from "../../../assets/images/images-Student/Frame 3.png";
import Logo from "../../../assets/images/images-Student/Group.png";
import { Link, useNavigate } from "react-router-dom";
import emailIcon from "../../../assets/Icons/Mail.png";
import passwordIcon from "../../../assets/Icons/password.png";
import { Formik, useFormik } from "formik";
import axios from "axios";
import values from "./../../../../node_modules/lodash-es/values";
import * as Yup from "yup";
import { authContext } from "../../../Context/AuthContextProvider";
export default function LoginAdmin() {
  const [isLoading, setIsLoading] = useState(false); //spinner
  let { setaccessToken, setrefreshToken } = useContext(authContext);
  const navigate = useNavigate();
  const [ErrorMessage, setErrorMessage] = useState(null);

  const validateSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .matches(
        /^\d{6,15}$/,
        "Password must start with a letter and be 6-15 characters"
      )
      .required("Password is required"),
  });

  async function handleLogin(values) {
    setIsLoading(true);
    console.log("values being sent:", values);
    try {
      const res = await axios.post(
        "https://educredit.runasp.net/api/Account/login",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Response:", res.data);

      navigate("/PersonalInformationAdmin");
      localStorage.setItem("accesstoken", res.data.accessToken);
      localStorage.setItem("refreshtoken", res.data.refreshToken);
      setaccessToken(res.data.accessToken);
      setrefreshToken(res.data.refreshToken);
      setErrorMessage(null); // مسح رسالة الخطأ بعد نجاح العملية
    } catch (error) {
      console.error("Login failed", error.response);
      setIsLoading(false);

      const errorMsg =
        error.response?.data?.errorMessage || "This email is not found!";
      setErrorMessage(errorMsg);
      setIsLoading(false);
    }
  }

  let formikLoginStudent = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: 1,
    },
    onSubmit: handleLogin,
    validationSchema: validateSchema,
  });

  return (
    <div className="h-[100vh] w-full bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9] flex items-center justify-center p-4 overflow-hidden">
      <div className="container mx-auto w-3/4 sm-w-[90%] lg:h-[90%] sm:h-auto bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center ">
        {/* القسم الأول - الصورة */}
        <div className="w-full md:w-1/2 h-[100%] sm:h-full flex items-center justify-center">
          <img
            src={Image}
            className="w-full h-[60%] sm:h-full object-contain sm:object-cover rounded-3xl"
          />
        </div>

        {/* القسم الثاني - المحتوى */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-black text-center p-6 space-y-4">
          <img src={Logo} alt="logo" className="w-20 md:w-24" />
          <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">
            WELCOME ADMIN!
          </h1>
          <p className="text-sm md:text-base font-normal">
            Access your personal account by logging in.
          </p>

          {/* نموذج تسجيل الدخول */}
          <form
            onSubmit={formikLoginStudent.handleSubmit}
            className="w-full max-w-md text-left space-y-4"
          >
            {/* حقل البريد الإلكتروني مع الأيقونة */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <div className="flex items-center border border-[#00B0D8] rounded-3xl p-2 gap-x-1">
                <img
                  src={emailIcon}
                  alt="email"
                  className="w-5 h-5 mr-1 opacity-60"
                />
                <input
                  name="email"
                  value={formikLoginStudent.values.email}
                  onChange={formikLoginStudent.handleChange}
                  onBlur={formikLoginStudent.handleBlur}
                  type="email"
                  className="w-full border-none outline-none text-gray-700 placeholder-[#00000099]"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>
            {formikLoginStudent.errors.email &&
            formikLoginStudent.touched.email ? (
              <div>
                <span className="font-medium text-[red]">
                  {formikLoginStudent.errors.email}
                </span>
              </div>
            ) : null}

            {/* حقل كلمة المرور مع الأيقونة */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="flex items-center border border-[#00B0D8] rounded-3xl p-2 gap-x-1">
                <img
                  src={passwordIcon}
                  alt="password"
                  className="w-5 h-5 mr-1 opacity-60"
                />
                <input
                  name="password"
                  value={formikLoginStudent.values.password}
                  onChange={formikLoginStudent.handleChange}
                  onBlur={formikLoginStudent.handleBlur}
                  type="password"
                  className="w-full border-none outline-none bg-transparent text-gray-700 placeholder-[#00000099]"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>
            {formikLoginStudent.errors.password &&
            formikLoginStudent.touched.password ? (
              <div>
                <span className="font-medium text-[red]">
                  {formikLoginStudent.errors.password}
                </span>
              </div>
            ) : null}

            {/* رسالة الخطأ من الـ API */}
            {ErrorMessage && (
              <div className="text-center text-[red]">
                <span className="font-medium text-danger">{ErrorMessage}</span>
              </div>
            )}

            {/* Remember me & Forget password */}
            <div className="flex items-center justify-between text-sm whitespace-nowrap gap-x-4 sm:gap-x-0">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-5 h-5 appearance-none border-2 border-[#00B0D8] rounded-full checked:bg-[#00B0D8] checked:border-[#00B0D8] flex items-center justify-center relative before:content-['✔'] before:text-white before:text-sm before:font-bold before:hidden checked:before:block"
                />
                <label htmlFor="remember" className="ml-2">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-black hover:underline font-bold"
              >
                Forget Password?
              </Link>
            </div>

            {/* أزرار التحكم */}
            <button
              type="submit"
              className="block w-full bg-[#00B0D8] text-white p-2 rounded-3xl hover:bg-[#0088A8] cursor-pointer"
            >
              {isLoading ? <i className="fas fa-spin fa-spinner"></i> : "Login"}
            </button>

            <Link
              to="/"
              className="block w-full bg-white border border-[#00B0D8] text-[#00B0D8] p-2 rounded-3xl hover:bg-[#00B0D8] hover:text-white transition text-center"
            >
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
