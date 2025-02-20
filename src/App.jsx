import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Select from "./Pages/Auth/SelectType/Select";
import LoginStudent from "../src/Pages/Auth/LoginStudent/LoginStudent";
import LoginTeacher from "./Pages/Auth/LoginTeacher/LoginTeacher";
import LoginAdmin from "./Pages/Auth/LoginAdmin/LoginAdmin";
import LoginSuberAdmin from "./Pages/Auth/LoginSuberAdmin/LoginSuberAdmin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Select />} />
      <Route path="/LoginStudent" element={<LoginStudent />} />
      <Route path="/LoginTeacher" element={<LoginTeacher />} />
      <Route path="/LoginAdmin" element={<LoginAdmin />} />
      <Route path="/LoginSuberAdmin" element={<LoginSuberAdmin />} />
    </Routes>
  );
}

export default App;
