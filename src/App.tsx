import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePageSchool } from "./pages/HomePageSchool";
import { SchoolCreateUser } from "./pages/SchoolCreateUser";
import { ParentSignUpPage } from "./pages/ParentSignUpPage";
import { TeacherSignUpPage } from "./pages/TeacherSignUpPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePageSchool />} />
        <Route path="/SchoolCreateUser" element={<SchoolCreateUser />} />
        <Route path="/ParentSignUpPage" element={<ParentSignUpPage />} />
        <Route path="/TeacherSignUpPage" element={<TeacherSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;