import React, { useEffect, useState } from "react";
import LogoEdu from "../../../../src/assets/images/ImagesHome/LogoEdu.png";
import InformationCircle from "../../../../src/assets/images/ImagesHome/Information Circle.png";
import Enroll from "../../../../src/assets/images/ImagesHome/Calendar Plus.png";
import ExamSchedule from "../../../../src/assets/images/ImagesHome/Exam Schedual.png";
import Pencil from "../../../../src/assets/images/ImagesHome/Pencil.png";
import StudySchedule from "../../../../src/assets/images/ImagesHome/Study schedual.png";
import InformationCircle2 from "../../../../src/assets/images/ImagesHome/Information Circle2.png";
import Enroll2 from "../../../../src/assets/images/ImagesHome/Enroll.png";
import StudySchedule2 from "../../../../src/assets/images/ImagesHome/Study Schedual(2).png";
import ExamSchedule2 from "../../../../src/assets/images/ImagesHome/Exam Schedual(2).png";
import Pencil2 from "../../../../src/assets/images/ImagesHome/Pencil 02.png";
import HelpChat from "../../../../src/assets/images/ImagesHome/Help Chat 2.png";
import ResetPassword from "../../../../src/assets/images/ImagesHome/Password 01.png";
import LogOut from "../../../../src/assets/images/ImagesHome/Logout.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function EnrollOfCourses() {
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9] flex items-center justify-center flex flex-col sm:h-screen">
        <div className="container mx-auto my-4 h-screen bg-[#EEF1F5] p-8 rounded-xl shadow-2xl flex flex-col sm:flex-row items-stretch">
          <div className="w-full sm:w-1/4 bg-white p-4 rounded-2xl shadow-md text-[#000000B2] h-full flex flex-col">
            {/* الجزء العلوي - القائمة الرئيسية */}
            <div>
              <img src={LogoEdu} alt="LogoEdu" className="mb-4" />
              <div className="bg-[#0000004D] w-[100%] h-[1.3px] my-2"></div>
              <h2 className="font-bold text-[#00000080]">MAIN MENU</h2>

              <ul className="mt-4 space-y-2">
                <Link
                  to="/PersonalInformation"
                  className={`p-2 rounded-md flex items-center gap-2 cursor-pointer transition-all duration-300 
    ${
      window.location.pathname === "/PersonalInformation"
        ? "bg-[#E6E6E6] text-[#0019BDD9]"
        : "hover:bg-gray-200 hover:text-[#0019BDD9]"
    }`}
                  onMouseEnter={(e) =>
                    (e.currentTarget.children[0].src = InformationCircle2)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.children[0].src =
                      window.location.pathname === "/PersonalInformation"
                        ? InformationCircle2
                        : InformationCircle)
                  }
                >
                  <img
                    src={
                      window.location.pathname === "/PersonalInformation"
                        ? InformationCircle2
                        : InformationCircle
                    }
                    alt="info"
                    className="w-5 h-5 transition-all duration-300"
                  />
                  Personal Information
                </Link>

                <Link
                  to="/EnrollOfCourses"
                  className={`p-2 rounded-md flex items-center gap-2 cursor-pointer transition-all duration-300 
    ${
      window.location.pathname === "/EnrollOfCourses"
        ? "bg-[#E6E6E6] text-[#0019BDD9]"
        : "hover:bg-gray-200 hover:text-[#0019BDD9]"
    }`}
                  onMouseEnter={(e) =>
                    (e.currentTarget.children[0].src = Enroll2)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.children[0].src =
                      window.location.pathname === "/PersonalInformation"
                        ? Enroll2
                        : Enroll)
                  }
                >
                  <img
                    src={
                      window.location.pathname === "/EnrollOfCourses"
                        ? Enroll2
                        : Enroll
                    }
                    alt="info"
                    className="w-5 h-5 transition-all duration-300"
                  />
                  Enroll Of Courses
                </Link>

                <Link
                  to="/StudySchedual"
                  className="p-2 hover:bg-gray-200 hover:text-[#0019BDD9] rounded-md flex items-center gap-2 hover:cursor-pointer"
                  onMouseEnter={(e) =>
                    (e.currentTarget.children[0].src = StudySchedule2)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.children[0].src = StudySchedule)
                  }
                >
                  <img
                    src={StudySchedule}
                    alt="study"
                    className="w-5 h-5 transition-all duration-300"
                  />
                  Study Schedule
                </Link>

                <li
                  className="p-2 hover:bg-gray-200 hover:text-[#0019BDD9] rounded-md flex items-center gap-2 hover:cursor-pointer"
                  onMouseEnter={(e) =>
                    (e.currentTarget.children[0].src = ExamSchedule2)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.children[0].src = ExamSchedule)
                  }
                >
                  <img
                    src={ExamSchedule}
                    alt="exam"
                    className="w-5 h-5 transition-all duration-300"
                  />
                  Exam Schedule
                </li>

                <li
                  className="p-2 hover:bg-gray-200 hover:text-[#0019BDD9] rounded-md flex items-center gap-2 hover:cursor-pointer"
                  onMouseEnter={(e) =>
                    (e.currentTarget.children[0].src = Pencil2)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.children[0].src = Pencil)
                  }
                >
                  <img
                    src={Pencil}
                    alt="course results"
                    className="w-5 h-5 transition-all duration-300"
                  />
                  Course Results
                </li>
              </ul>
            </div>

            {/* الجزء السفلي - OTHER */}
            <div className="mt-auto">
              <h2 className="font-bold text-[#00000080]">OTHER</h2>

              <ul className="mt-4 space-y-2">
                <li className="p-2 hover:bg-gray-200 rounded-md flex items-center gap-2 text-[#000000B2] cursor-pointer">
                  <img src={HelpChat} alt="help" className="w-5 h-5" />
                  Help Center
                </li>
                <li className="p-2 hover:bg-gray-200 rounded-md flex items-center gap-2 text-[#000000B2] cursor-pointer">
                  <img src={ResetPassword} alt="reset" className="w-5 h-5" />
                  Reset Password
                </li>
                <li className="p-2 hover:bg-gray-200 text-[#000000B2] rounded-md flex items-center gap-2 font-semibold cursor-pointer">
                  <img src={LogOut} alt="logout" className="w-5 h-5" />
                  Logout
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-3/4 bg-white p-6 ml-4 sm:ml-4 rounded-2xl shadow-md h-full flex flex-col">
            {/* معلومات المستخدم */}
            <div className="grid grid-cols-2 gap-4 text-[#000]">
              <div className="grid grid-cols-1 gap-2">
                <p className="font-bold">Name :</p>
                <p className="font-bold">Department :</p>
                <p className="font-bold">Name of Guide :</p>
                <p className="font-bold">Level :</p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <p className="font-bold">Obtained hours :</p>
                <p className="font-bold">Available Hours :</p>
                <p className="font-bold">GBA :</p>
              </div>
            </div>
            {/* جدول الدورات المتاحة */}
          </div>
        </div>
      </div>
    </>
  );
}
