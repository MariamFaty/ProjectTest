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
          "https://educredit.runasp.net/api/User/getuserbyemail",
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
    <div className="min-h-screen w-full bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9] flex items-center justify-center flex flex-col m ">
      <div className="container mx-auto my-4 bg-[#EEF1F5] p-8 rounded-xl shadow-2xl flex flex-row items-stretch h-full ">
        <div className="w-full sm:w-1/4 bg-white p-4 rounded-2xl shadow-md text-[#000000B2] h-full flex flex-col ">
          {/* الجزء العلوي - القائمة الرئيسية */}
          <div>
            <img src={LogoEdu} alt="LogoEdu" className="mb-4" />
            <div className="bg-[#0000004D] w-[100%] h-[1.3px] my-2"></div>
            <h2 className="font-bold text-[#00000080]">MAIN MENU</h2>

            <ul className="mt-4 space-y-2">
              <Link
                to="/PersonalInformation"
                className={`p-2 rounded-md flex items-center gap-2 cursor-pointer transition-all duration-300 space-y-1 
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
                className="p-2 hover:bg-gray-200 hover:text-[#0019BDD9] rounded-md flex items-center gap-2 hover:cursor-pointer space-y-1 "
                onMouseEnter={(e) =>
                  (e.currentTarget.children[0].src = Enroll2)
                }
                onMouseLeave={(e) => (e.currentTarget.children[0].src = Enroll)}
              >
                <img
                  src={Enroll}
                  alt="enroll"
                  className="w-5 h-5 transition-all duration-300"
                />
                Enroll of courses
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
                onMouseLeave={(e) => (e.currentTarget.children[0].src = Pencil)}
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
