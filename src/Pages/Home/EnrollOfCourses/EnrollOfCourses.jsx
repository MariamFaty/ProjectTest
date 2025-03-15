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
  // State to manage sidebar visibility on small screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9] flex items-center justify-center flex flex-col m max-h-screen overflow-y-auto sm:overflow-y-hidden">
        {/* Hamburger Menu Button for Small Screens */}
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#0077B6] text-white rounded-md focus:outline-none"
          onClick={toggleSidebar}
        >
          {/* Hamburger Icon (3 horizontal lines) */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isSidebarOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        <div className="container mx-auto my-4 bg-[#EEF1F5] p-4 sm:p-8 rounded-xl shadow-2xl flex flex-col lg:flex-row items-stretch h-auto">
          {/* Sidebar with Conditional Styling for Small Screens */}
          <div
            className={`w-full lg:w-1/4 bg-white p-4 rounded-2xl shadow-md text-[#000000B2] h-auto flex flex-col overflow-y-auto fixed lg:static top-0 left-0 h-full z-40 transform transition-transform duration-300 ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
          >
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
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
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
                      window.location.pathname === "/EnrollOfCourses"
                        ? Enroll2
                        : Enroll)
                  }
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
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
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                >
                  <img
                    src={StudySchedule}
                    alt="study"
                    className="w-5 h-5 transition-all duration-300"
                  />
                  Study Schedule
                </Link>

                <li
                  className="p-2 hover:bg-gray-200 hover:text-[#0019BDD9] rounded-2xl flex items-center gap-2 hover:cursor-pointer"
                  onMouseEnter={(e) =>
                    (e.currentTarget.children[0].src = ExamSchedule2)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.children[0].src = ExamSchedule)
                  }
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                >
                  <img
                    src={ExamSchedule}
                    alt="exam"
                    className="w-5 h-5 transition-all duration-300"
                  />
                  Exam Schedule
                </li>

                <li
                  className="p-2 hover:bg-gray-200 hover:text-[#0019BDD9] rounded-2xl flex items-center gap-2 hover:cursor-pointer"
                  onMouseEnter={(e) =>
                    (e.currentTarget.children[0].src = Pencil2)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.children[0].src = Pencil)
                  }
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
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

            {/* Adding a spacer div to create space between MAIN MENU and OTHER */}
            <div className="h-16"></div>

            {/* الجزء السفلي - OTHER */}
            <div className="mt-auto">
              <h2 className="font-bold text-[#00000080]">OTHER</h2>

              <ul className="mt-4 space-y-2">
                <li
                  className="p-2 hover:bg-gray-200 rounded-md flex items-center gap-2 text-[#000000B2] cursor-pointer"
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                >
                  <img src={HelpChat} alt="help" className="w-5 h-5" />
                  Help Center
                </li>
                <li
                  className="p-2 hover:bg-gray-200 rounded-md flex items-center gap-2 text-[#000000B2] cursor-pointer"
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                >
                  <img src={ResetPassword} alt="reset" className="w-5 h-5" />
                  Reset Password
                </li>
                <li
                  className="p-2 hover:bg-gray-200 text-[#000000B2] rounded-md flex items-center gap-2 font-semibold cursor-pointer"
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                >
                  <img src={LogOut} alt="logout" className="w-5 h-5" />
                  Logout
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-3/4 bg-white p-4 sm:p-6 mt-4 lg:mt-0 lg:ml-4 rounded-2xl shadow-md flex flex-col overflow-y-auto">
            {/* معلومات المستخدم */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#000]">
              <div className="flex flex-col gap-2">
                <div className="flex items-center flex-wrap">
                  <span className="text-[#0077B6] mr-2">•</span>
                  <p className="font-bold w-32 mr-4 text-[#0077B6] flex-shrink-0">
                    Name :
                  </p>
                  <p className="font-normal mr-4 whitespace-nowrap overflow-hidden text-ellipsis">
                    Nadeen Mohamed Mohamed
                  </p>
                </div>
                <div className="flex items-center flex-wrap">
                  <span className="text-[#0077B6] mr-2">•</span>
                  <p className="font-bold w-32 mr-4 text-[#0077B6]">
                    Department :
                  </p>
                  <p className="font-normal mr-4">Computer Science</p>
                </div>
                <div className="flex items-center flex-wrap">
                  <span className="text-[#0077B6] mr-2">•</span>
                  <p className="font-bold w-32 mr-4 text-[#0077B6]">
                    Name of Guide :
                  </p>
                  <p className="font-normal">Mohamed Ali</p>
                </div>
                <div className="flex items-center flex-wrap">
                  <span className="text-[#0077B6] mr-2">•</span>
                  <p className="font-bold w-32 mr-4 text-[#0077B6]">Level :</p>
                  <p className="font-normal">3</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center flex-wrap">
                  <span className="text-[#0077B6] mr-2">•</span>
                  <p className="font-bold w-32 mr-4 text-[#0077B6]">
                    Obtained hours :
                  </p>
                  <p className="font-normal mr-4">105</p>
                </div>
                <div className="flex items-center flex-wrap">
                  <span className="text-[#0077B6] mr-2">•</span>
                  <p className="font-bold w-32 mr-4 text-[#0077B6]">
                    Available Hours :
                  </p>
                  <p className="font-normal">18</p>
                </div>
                <div className="flex items-center flex-wrap">
                  <span className="text-[#0077B6] mr-2">•</span>
                  <p className="font-bold w-32 mr-4 text-[#0077B6]">GBA :</p>
                  <p className="font-normal">3.31</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0000004D] w-[100%] h-[1.3px] my-2"></div>
            {/* Available Courses Schedule */}
            <div className="mt-2">
              <h3 className="font-bold text-lg mb-2">
                Available Courses Schedule
              </h3>
              <div className="overflow-x-auto rounded-lg ">
                <table className="w-full ">
                  <thead>
                    <tr className="bg-[#ACE0F9] rounded-t-lg">
                      <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold ">
                        #
                      </th>
                      <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                        Course
                      </th>
                      <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                        Duration
                      </th>
                      <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                        Hours
                      </th>
                      <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                        Teacher
                      </th>
                      <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                        Day
                      </th>
                      <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                        Start
                      </th>
                      <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                        End
                      </th>
                      <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold rounded-tr-lg">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-[#0077B6] rounded-b-lg">
                      <td className="border border-[#0077B6] p-2 text-center text-sm sm:text-base bg-[#ACE0F9]">
                        1
                      </td>
                      <td className="border border-[#0077B6] p-2 text-sm sm:text-base ">
                        Data Structure
                      </td>
                      <td className="border border-[#0077B6] p-2 text-center text-sm sm:text-base">
                        3
                      </td>
                      <td className="border border-[#0077B6] p-2 text-center text-sm sm:text-base">
                        4
                      </td>
                      <td className="border border-[#0077B6] p-2 text-sm sm:text-base">
                        Ahmed Adel
                      </td>
                      <td className="border border-[#0077B6] p-2 text-sm sm:text-base">
                        Sunday
                      </td>
                      <td className="border border-[#0077B6] p-2 text-sm sm:text-base">
                        09:00 AM
                      </td>
                      <td className="border border-[#0077B6] p-2 text-sm sm:text-base">
                        12:00 AM
                      </td>
                      <td className="border border-[#0077B6] p-2 text-center">
                        <button className="text-green-500 text-lg">➕</button>
                      </td>
                    </tr>
                    <tr className="border border-[#0077B6]">
                      <td className="border border-[#0077B6] p-2 text-center text-sm sm:text-base bg-[#ACE0F9]">
                        2
                      </td>
                      <td className="border border-[#0077B6] p-2 text-sm sm:text-base ">
                        Software Engineering
                      </td>
                      <td className="border border-[#0077B6] p-2 text-center text-sm sm:text-base">
                        3
                      </td>
                      <td className="border border-[#0077B6] p-2 text-center text-sm sm:text-base">
                        4
                      </td>
                      <td className="border border-[#0077B6] p-2 text-sm sm:text-base ">
                        Maha Mohamed
                      </td>
                      <td className="border border-[#0077B6] p-2 text-sm sm:text-base ">
                        Saturday
                      </td>
                      <td className="border border-[#0077B6] p-2 text-sm sm:text-base">
                        11:00 AM
                      </td>
                      <td className="border border-[#0077B6] p-2 text-sm sm:text-base">
                        02:00 PM
                      </td>
                      <td className="border border-[#0077B6] p-2 text-center">
                        <button className="text-red-500 text-lg">❌</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">Enrolled Course</h3>
              <div className="overflow-x-auto rounded-lg">
                {/* Add a wrapper div with fixed height and overflow-y-auto */}
                <div className="max-h-[164px] overflow-y-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#ACE0F9]">
                        <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                          Day \ Time
                        </th>
                        <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                          09:00
                        </th>
                        <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                          10:00
                        </th>
                        <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                          11:00
                        </th>
                        <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                          12:00
                        </th>
                        <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                          01:00
                        </th>
                        <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                          02:00
                        </th>
                        <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                          03:00
                        </th>
                        <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                          04:00
                        </th>
                        <th className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold">
                          05:00
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* مثال على صف يوم السبت */}
                      <tr>
                        <td className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold bg-[#ACE0F9]">
                          Saturday
                        </td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2 bg-[#ACE0F9] text-center font-bold">
                          Software Engineering
                        </td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                      </tr>
                      {/* مثال على صف آخر */}
                      <tr>
                        <td className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold bg-[#ACE0F9]">
                          Sunday
                        </td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2 bg-[#ACE0F9] text-center font-bold">
                          File System
                        </td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold bg-[#ACE0F9]">
                          Monday
                        </td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2 bg-[#ACE0F9] text-center font-bold">
                          Software Engineering
                        </td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold bg-[#ACE0F9]">
                          Tuesday
                        </td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2  "></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold bg-[#ACE0F9]">
                          Wednesday
                        </td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2  "></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-[#0077B6] p-2 text-sm sm:text-base font-bold bg-[#ACE0F9]">
                          Thursday
                        </td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2  "></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                        <td className="border border-[#0077B6] p-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
