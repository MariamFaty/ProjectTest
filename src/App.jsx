import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Select from "./Pages/Auth/SelectType/Select";
import LoginStudent from "./Pages/Auth/LoginStudent/LoginStudent";
import LoginTeacher from "./Pages/Auth/LoginTeacher/LoginTeacher";
import LoginAdmin from "./Pages/Auth/LoginAdmin/LoginAdmin";
import LoginSuberAdmin from "./Pages/Auth/LoginSuberAdmin/LoginSuberAdmin";
import PersonalInformation from "./Pages/Home/Personal Information/PersonalInformation";
import EnrollOfCourses from "./Pages/Home/EnrollOfCourses/EnrollOfCourses";
import StudySchedule from "./Pages/Home/StudySchedual/StudySchedual";
import DashBoardTeacher from "./Pages/TeacherInformation/DashBoardTeacher/DashBoardTeacher";
import DashBoardSuperAdmin from "./Pages/SuperAdminInformation/DashboardSuperAdmin/DashBoardSuperAdmin";
//import DashBoardAdmin from "../src/Pages/AdminInformation/"
import AuthContextProvider from "./Context/AuthContextProvider";
import PersonalInformationSuperAdmin from "./Pages/SuperAdminInformation/PersonalInformationSuperAdmin/PersonalInformationSuperAdmin";
//import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
//import PublicRoute from "./components/PublicRoute/PublicRoute";
import ManageDepartmentsSuperAdmin from "./Pages/SuperAdminInformation/ManageDepartmentsSuperAdmin/ManageDepartmentsSuperAdmin";
import ManageCoursesSuperAdmin from "./Pages/SuperAdminInformation/ManageCoursesSuperAdmin/ManageCoursesSuperAdmin";
import ManageTeachersSuperAdmin from "./Pages/SuperAdminInformation/ManageTeachersSuperAdmin/ManageTeachersSuperAdmin";
import ManageStudentsSuperAdmin from "./Pages/SuperAdminInformation/ManageStudentsSuperAdmin/ManageStudentsSuperAdmin";
import PersonalInformationTeacher from "./Pages/TeacherInformation/PersonalInformationTeacher/PersonalInformationTeacher";
import PersonalInformationAdmin from "./Pages/AdminInformation/PersonalInformationAdmin/PersonalInformationAdmin";

function App() {
  const router = createBrowserRouter([
    // 🟢 مسارات التسجيل العام
    {
      path: "/",
      element: (
        //<PublicRoute>
        <Select />
        // </PublicRoute>
      ),
    },
    {
      path: "/LoginStudent",
      element: (
        //<PublicRoute>
        <LoginStudent />
        // </PublicRoute>
      ),
    },
    {
      path: "/LoginTeacher",
      element: (
        //<PublicRoute>
        <LoginTeacher />
        // </PublicRoute>
      ),
    },
    {
      path: "/LoginAdmin",
      element: (
        //<PublicRoute>
        <LoginAdmin />
        //  </PublicRoute>
      ),
    },
    {
      path: "/LoginSuberAdmin",
      element: (
        // <PublicRoute>
        <LoginSuberAdmin />
        // </PublicRoute>
      ),
    },

    // 🟢 مسارات الطلاب
    {
      path: "/PersonalInformation",
      element: (
        // <ProtectedRoute>
        <PersonalInformation />
        //  </ProtectedRoute>
      ),
    },
    {
      path: "/EnrollOfCourses",
      element: (
        // <ProtectedRoute>
        <EnrollOfCourses />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/StudySchedule",
      element: (
        // <ProtectedRoute>
        <StudySchedule />
        //</ProtectedRoute>
      ),
    },

    // 🟢 مسارات المدرسين
    {
      path: "/TeacherDashboard",
      element: (
        // <ProtectedRoute>
        <DashBoardTeacher />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/PersonalInformationTeacher",
      element: (
        // <ProtectedRoute>
        <PersonalInformationTeacher />
        // </ProtectedRoute>
      ),
    },

    // 🟢 مسارات الإداريين
    {
      path: "/PersonalInformationAdmin",
      element: (
        // <ProtectedRoute>
        <PersonalInformationAdmin />
        // </ProtectedRoute>
      ),
    },

    /* {
      path: "/AdminDashboard",
      element: (
        <ProtectedRoute>
          <DashBoardAdmin />
        </ProtectedRoute>
      ),
    },*/

    // 🟢 مسارات السوبر أدمن
    {
      path: "/SuperAdminDashboard",
      element: (
        // <ProtectedRoute>
        <DashBoardSuperAdmin />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/PersonalInformationSuperAdmin",
      element: (
        // <ProtectedRoute>
        <PersonalInformationSuperAdmin />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/ManageDepartmentsSuperAdmin",
      element: (
        // <ProtectedRoute>
        <ManageDepartmentsSuperAdmin />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/ManageCoursesSuperAdmin",
      element: (
        // <ProtectedRoute>
        <ManageCoursesSuperAdmin />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/ManageTeachersSuperAdmin",
      element: (
        // <ProtectedRoute>
        <ManageTeachersSuperAdmin />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/ManageStudentsSuperAdmin",
      element: (
        // <ProtectedRoute>
        <ManageStudentsSuperAdmin />
        // </ProtectedRoute>
      ),
    },
  ]);

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
