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

export default function PersonalInformation() {
  // State to manage sidebar visibility on small screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    gender: "",
    email: "",
    birthDate: "",
    address: "",
    nationalId: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token =
          localStorage.getItem("accesstoken") || authContextaccessToken;
        if (!token) {
          throw new Error("No token found. Please log in again.");
        }

        // جلب البيانات باستخدام Axios
        const response = await axios.get(
          "https://educredit.runasp.net/api/User/GetUserInfo",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched Data:", response.data);

        // تحديث البيانات
        setUserData({
          name: response.data.name || "",
          phoneNumber: response.data.phoneNumber || "",
          gender: response.data.gender || "",
          email: response.data.email || "",
          birthDate: response.data.birthDate || "",
          address: response.data.address || "",
          nationalId: response.data.nationalId || "",
        });
      } catch (error) {
        // معالجة الأخطاء
        if (error.response) {
          // الـ API أرجع استجابة مع خطأ (مثل 401 Unauthorized)
          setError(
            `Error ${error.response.status}: ${
              error.response.data.message || "Failed to fetch user data"
            }`
          );
        } else if (error.request) {
          // لم يتم تلقي استجابة من الـ API (مشكلة في الشبكة)
          setError("Network error: Could not reach the server.");
        } else {
          // أخطاء أخرى (مثل خطأ في الكود)
          setError(error.message);
        }
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error)
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  return (
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
              isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
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
                onMouseLeave={(e) => (e.currentTarget.children[0].src = Pencil)}
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

        {/* الجزء الأيمن (المحتوى الرئيسي) */}
        <div className="w-full md:w-3/4 w-1/4 bg-white p-6 ml-4 sm:ml-4 rounded-2xl shadow-md  flex flex-col ">
          <h2 className="font-bold text-lg mb-3 text-[#000000B2]">
            Welcome, {userData.name.split(" ")[0] || "User"}
          </h2>
          <div className="bg-[#0000004D] w-[100%] h-[1.3px] my-2"></div>

          <div className="space-y-3">
            <div className="flex items-center">
              <span className="w-1/3 font-bold mr-4 text-[#000000B2] bg-[#ACE0F9] p-2 rounded-xl border border-[#6BBBFFE5]">
                Name
              </span>
              <span className="w-full bg-[#D0F0FF] p-2 rounded-xl text-[#000000B2] border border-[#6BBBFFE5]">
                {userData.name || "N/A"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-1/3 font-bold mr-4 text-[#000000B2] bg-[#ACE0F9] p-2 rounded-xl border border-[#6BBBFFE5]">
                Phone Number
              </span>
              <span className="w-full bg-[#D0F0FF] p-2 rounded-xl text-[#000000B2] border border-[#6BBBFFE5]">
                {userData.phoneNumber || "N/A"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-1/3 font-bold mr-4 text-[#000000B2] bg-[#ACE0F9] p-2 rounded-xl border border-[#6BBBFFE5]">
                Gender
              </span>
              <span className="w-full bg-[#D0F0FF] p-2 rounded-xl text-[#000000B2] border border-[#6BBBFFE5]">
                {userData.gender || "N/A"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-1/3 font-bold mr-4 text-[#000000B2] bg-[#ACE0F9] p-2 rounded-xl border border-[#6BBBFFE5]">
                Email
              </span>
              <span className="w-full bg-[#D0F0FF] p-2 rounded-xl text-[#000000B2] border border-[#6BBBFFE5]">
                {userData.email || "N/A"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-1/3 font-bold mr-4 text-[#000000B2] bg-[#ACE0F9] p-2 rounded-xl border border-[#6BBBFFE5]">
                Birth Date
              </span>
              <span className="w-full bg-[#D0F0FF] p-2 rounded-xl text-[#000000B2] border border-[#6BBBFFE5]">
                {userData.birthDate || "N/A"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-1/3 font-bold mr-4 text-[#000000B2] bg-[#ACE0F9] p-2 rounded-xl border border-[#6BBBFFE5]">
                Address
              </span>
              <span className="w-full bg-[#D0F0FF] p-2 rounded-xl text-[#000000B2] border border-[#6BBBFFE5]">
                {userData.address || "N/A"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-1/3 font-bold mr-4 text-[#000000B2] bg-[#ACE0F9] p-2 rounded-xl border border-[#6BBBFFE5]">
                National Id
              </span>
              <span className="w-full bg-[#D0F0FF] p-2 rounded-xl text-[#000000B2] border border-[#6BBBFFE5]">
                {userData.nationalId || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
