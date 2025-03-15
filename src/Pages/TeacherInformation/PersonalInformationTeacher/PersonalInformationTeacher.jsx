import React, { useEffect, useState } from "react";
import LogoEdu from "../../../../src/assets/images/ImagesHome/LogoEdu.png";
import InformationCircle from "../../../../src/assets/images/ImagesHome/Information Circle.png";
import InformationCircle2 from "../../../../src/assets/images/ImagesHome/Information Circle2.png";
import calenderCheck from "../../../../src/assets/images/images-Teacher/CalendarCheck.png";
import calenderCheck2 from "../../../../src/assets/images/images-Teacher/calendarCheck (1).png";
import Person from "../../../../src/assets/images/images-Teacher/Person.png";
import Person2 from "../../../../src/assets/images/images-Teacher/Person (2).png";

import Dashboard2 from "../../../../src/assets/images/images-SuperAdmin/Dashboard2.png";
import Dashboard from "../../../../src/assets/images/images-SuperAdmin/Dashboard.png";
import HelpChat from "../../../../src/assets/images/ImagesHome/Help Chat 2.png";
import ResetPassword from "../../../../src/assets/images/ImagesHome/Password 01.png";
import LogOut from "../../../../src/assets/images/ImagesHome/Logout.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PersonalInformationTeacher() {
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
                to="/TeacherDashboard"
                className="p-2 hover:bg-gray-200 hover:text-[#0019BDD9] rounded-md flex items-center gap-2 hover:cursor-pointer"
                onMouseEnter={(e) =>
                  (e.currentTarget.children[0].src = Dashboard2)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.children[0].src = Dashboard)
                }
              >
                <img
                  src={Dashboard}
                  alt="enroll"
                  className="w-5 h-5 transition-all duration-300"
                />
                Dashboard
              </Link>
              <Link
                to="/PersonalInformationTeacher"
                className={`p-2 rounded-md flex items-center gap-2 cursor-pointer transition-all duration-300 
    ${
      window.location.pathname === "/PersonalInformationTeacher"
        ? "bg-[#E6E6E6] text-[#0019BDD9]"
        : "hover:bg-gray-200 hover:text-[#0019BDD9]"
    }`}
                onMouseEnter={(e) =>
                  (e.currentTarget.children[0].src = InformationCircle2)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.children[0].src =
                    window.location.pathname === "/PersonalInformationTeacher"
                      ? InformationCircle2
                      : InformationCircle)
                }
              >
                <img
                  src={
                    window.location.pathname === "/PersonalInformationTeacher"
                      ? InformationCircle2
                      : InformationCircle
                  }
                  alt="info"
                  className="w-5 h-5 transition-all duration-300"
                />
                Personal Information
              </Link>

              <Link
                to="/"
                className="p-2 hover:bg-gray-200 hover:text-[#0019BDD9] rounded-md flex items-center gap-2 hover:cursor-pointer"
                onMouseEnter={(e) =>
                  (e.currentTarget.children[0].src = calenderCheck2)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.children[0].src = calenderCheck)
                }
              >
                <img
                  src={calenderCheck}
                  alt="enroll"
                  className="w-5 h-5 transition-all duration-300"
                />
                Coeses Scheduled
              </Link>

              <Link
                to="/"
                className="p-2 hover:bg-gray-200 hover:text-[#0019BDD9] rounded-md flex items-center gap-2 hover:cursor-pointer"
                onMouseEnter={(e) =>
                  (e.currentTarget.children[0].src = Person2)
                }
                onMouseLeave={(e) => (e.currentTarget.children[0].src = Person)}
              >
                <img
                  src={Person}
                  alt="study"
                  className="w-5 h-5 transition-all duration-300"
                />
                Manage Guidance
              </Link>
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
        <div className="w-full sm:w-3/4 bg-white p-6 ml-4 sm:ml-4 rounded-2xl shadow-md h-full flex flex-col">
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
