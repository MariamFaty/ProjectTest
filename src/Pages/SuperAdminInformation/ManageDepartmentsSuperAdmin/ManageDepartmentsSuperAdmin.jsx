import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

export default function ManageDepartmentsSuperAdmin() {
  const Navigate = useNavigate();
  const location = useLocation();
  // State to manage sidebar visibility on small screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // عدد الصفوف لكل صفحة
  const [totalPages, setTotalPages] = useState(1);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // State for pagination
  const [departments, setDepartments] = useState([]);

  // ✅ دالة البحث لتحديث `searchTerm`
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // ✅ تصفية الأقسام بناءً على البحث
  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);

  const handleDeleteClick = (dept) => {
    console.log("Selected for deletion:", dept); // ✅ تحقق من البيانات المختارة للحذف
    setSelectedDept(dept);
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setSelectedDept(null);
  };
  // ✅ استرجاع البيانات من localStorage عند التحميل
  // دالة لجلب البيانات من الـ API أو localStorage
  const fetchDepartments = async () => {
    try {
      const token = localStorage.getItem("accesstoken");
      if (!token) throw new Error("No token found. Please log in again.");

      const storedDepartments = localStorage.getItem("departments");
      if (storedDepartments && !location.state?.refresh) {
        const parsedDepartments = JSON.parse(storedDepartments);
        setDepartments(parsedDepartments);
        setTotalPages(Math.ceil(parsedDepartments.length / pageSize));
      } else {
        const response = await axios.get(
          "https://educredit.runasp.net/api/Department",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const fetchedDepartments = response.data.data || [];
        setDepartments(fetchedDepartments);
        setTotalPages(Math.ceil(fetchedDepartments.length / pageSize));

        // حفظ البيانات في localStorage
        localStorage.setItem("departments", JSON.stringify(fetchedDepartments));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch departments. Please try again.");
    }
  };
  useEffect(() => {
    fetchDepartments();
  }, [location.state?.refresh]); // إزالة `departments.length` علشان ما يعمل تحديث غير ضروري

  //delete data
  const handleConfirmDelete = async () => {
    if (!selectedDept || !selectedDept.id) {
      alert("No department selected for deletion.");
      return;
    }

    try {
      const token = localStorage.getItem("accesstoken");
      if (!token) {
        alert("No token found. Please log in again.");
        return;
      }

      await axios.delete(
        `https://educredit.runasp.net/api/Department/${selectedDept.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ تحديث الأقسام بعد الحذف مباشرة
      setDepartments((prev) =>
        prev.filter((dept) => dept.id !== selectedDept.id)
      );

      // ✅ حفظ التحديث في localStorage حتى لا يعود بعد إعادة التحميل
      localStorage.setItem(
        "departments",
        JSON.stringify(
          departments.filter((dept) => dept.id !== selectedDept.id)
        )
      );

      console.log("Department deleted successfully!");

      // ✅ إغلاق المودال بعد الحذف مباشرة
      setShowDeleteModal(false);
      setSelectedDept(null);
    } catch (error) {
      console.error("Error deleting department:", error);
      alert("Failed to delete department. Please try again.");
    }
  };

  // استخراج البيانات الخاصة بالصفحة الحالية
  const currentData = filteredDepartments.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className=" min-h-screen w-full bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9] flex items-center justify-center flex  max-h-screen overflow-y-auto sm:overflow-y-hidden">
      {/* ✅ نقل المودال إلى هنا ليغطي الشاشة بالكامل */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[3px] z-50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              {/* زر الإغلاق */}
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
                onClick={handleCloseModal}
              >
                ✖
              </button>

              {/* محتوى المودال */}
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete{" "}
                  <strong>{selectedDept?.name}</strong>?
                </h3>
                {/* زر التأكيد */}
                <button
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={handleConfirmDelete}
                >
                  Yes, I'm sure
                </button>
                {/* زر الإلغاء */}
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  onClick={handleCloseModal}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

      <div className=" my-4 bg-[#EEF1F5] p-4 sm:p-8 rounded-xl shadow-2xl flex flex-col  h-auto ">
        {/* Sidebar with Conditional Styling for Small Screens */}
      </div>
    </div>
  );
}
