import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePageSchool } from "./pages/HomePage/HomePageSchool";
import { SchoolCreateUser } from "./pages/SchoolCreateUserPage";
import { ParentSignUpPage } from "./pages/ParentSignUpPage";
import { TeacherSignUpPage } from "./pages/TeacherSignUpPage";
import { ParentTeacherSignUp } from "./pages/HomePage/Parent/ParentTeacherSignUpPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePageSchool />} />
        <Route path="/SchoolCreateUser" element={<SchoolCreateUser />} />
        <Route path="/ParentSignUpPage" element={<ParentSignUpPage />} />
        <Route path="/TeacherSignUpPage" element={<TeacherSignUpPage />} />
        <Route path="/ParentTeacherSignUpPage" element={<ParentTeacherSignUp />} />
      </Routes>
    </div>
  );
}

export default App;