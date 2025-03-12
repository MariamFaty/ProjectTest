import React from "react";
import { Link } from "react-router-dom";
import "./Select.css";
import Logo from "../../../assets/images/images-Select/Group.png";
// الصور العادية
import SuperAdmin from "../../../assets/Icons/Vector (1).png";
import Admin from "../../../assets/Icons/Vector (2).png";
import Teacher from "../../../assets/Icons/teacher.png";
import Student from "../../../assets/Icons/Vector.png";

// الصور اما احولها لابيض
import SuperAdminWhite from "../../../assets/Icons/Vector (5).png";
import AdminWhite from "../../../assets/Icons/Vector (6).png";
import TeacherWhite from "../../../assets/Icons/Vector (7).png";
import StudentWhite from "../../../assets/Icons/Vector (4).png";

export default function Select() {
  return (
    <div className="min-h-screen  w-full bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9] flex  items-center justify-center p-4">
      <div className="w-3/4 lg:h-[90%] sm:h-auto bg-white p-8 rounded-xl shadow-lg relative ">
        {/* اللوجو */}
        <div className="mt-5">
          <img src={Logo} alt="Logo" />
        </div>

        {/* العنوان */}
        <h1 className="text-2xl font-bold text-gray-800  mt-17 lg:mt-10">
          Select User Type
        </h1>
        <div className="w-[34px] h-[6px] bg-[#00B0D8] rounded mt-1 mb-6 "></div>

        {/* الكروت */}
        <div className="grid mb-25 md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-6 w-full mt-20 overflow-y-auto">
          {/* Card 1 */}
          <Link
            to="LoginSuberAdmin"
            className="group bg-[#CAF0F8] p-6 md:p-8 rounded-xl drop-shadow-lg
            flex flex-col items-center justify-center 
            w-full h-32 md:h-36 lg:h-40 transition-all duration-300 hover:bg-[#00B0D8] hover:shadow-xl"
          >
            <img
              src={SuperAdmin}
              alt="Super Admin"
              className="w-8 h-7 mb-2 group-hover:hidden"
            />
            <img
              src={SuperAdminWhite}
              alt="Super Admin White"
              className="w-8 h-7 mb-2 hidden group-hover:block"
            />
            <p className="text-lg font-semibold text-center text-black group-hover:text-white">
              Super Admin
            </p>
          </Link>

          {/* Card 2 */}
          <Link
            to="LoginAdmin"
            className="group bg-[#CAF0F8] p-6 md:p-8 rounded-xl drop-shadow-lg flex flex-col items-center justify-center 
            w-full h-32 md:h-36 lg:h-40 transition-all duration-300 hover:bg-[#00B0D8] hover:shadow-xl"
          >
            <img
              src={Admin}
              alt="Admin"
              className="w-8 h-7 mb-2 group-hover:hidden"
            />
            <img
              src={AdminWhite}
              alt="Admin White"
              className="w-8 h-7 mb-2 hidden group-hover:block"
            />
            <p className="text-lg font-semibold text-center text-black group-hover:text-white">
              Admin
            </p>
          </Link>

          {/* Card 3 */}
          <Link
            to="LoginTeacher"
            className="group bg-[#CAF0F8] p-6 md:p-8 rounded-xl drop-shadow-lg flex flex-col items-center justify-center 
            w-full h-32 md:h-36 lg:h-40 transition-all duration-300 hover:bg-[#00B0D8] hover:shadow-xl"
          >
            <img
              src={Teacher}
              alt="Teacher"
              className="w-8 h-7 mb-2 group-hover:hidden"
            />
            <img
              src={TeacherWhite}
              alt="Teacher White"
              className="w-8 h-7 mb-2 hidden group-hover:block"
            />
            <p className="text-lg font-semibold text-center text-black group-hover:text-white">
              Teacher
            </p>
          </Link>

          {/* Card 4 */}
          <Link
            to="LoginStudent"
            className="group bg-[#CAF0F8] p-6 md:p-8 rounded-xl drop-shadow-lg flex flex-col items-center justify-center 
            w-full h-32 md:h-36 lg:h-40 transition-all duration-300 hover:bg-[#00B0D8] hover:shadow-xl"
          >
            <img
              src={Student}
              alt="Student"
              className="w-7 h-7 mb-2 group-hover:hidden"
            />
            <img
              src={StudentWhite}
              alt="Student White"
              className="w-7 h-7 mb-2 hidden group-hover:block"
            />
            <p className="text-lg font-semibold text-center text-black group-hover:text-white">
              Student
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
