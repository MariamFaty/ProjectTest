/*export default function PublicRoute({ children }) {
  const token = localStorage.getItem("accessToken");
  const userRole = localStorage.getItem("userRole");

  if (token) {
    const roleRoutes = {
      student: "/PersonalInformation",
      teacher: "/TeacherDashboard",
      admin: "/AdminDashboard",
      superAdmin: "/SuperAdminDashboard",
    };

    return <Navigate to={roleRoutes[userRole] || "/PersonalInformation"} />;
  }

  return children;
}*/
