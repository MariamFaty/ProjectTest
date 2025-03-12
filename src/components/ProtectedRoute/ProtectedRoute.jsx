/*export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("accessToken");
  const userRole = localStorage.getItem("userRole") || "";

  if (!token) {
    const loginRoutes = {
      student: "/LoginStudent",
      teacher: "/LoginTeacher",
      admin: "/LoginAdmin",
      superAdmin: "/LoginSuperAdmin",
    };

    return <Navigate to={loginRoutes[userRole] || "/"} />;
  }

  return children;
}*/
