import { Route, Routes } from "react-router-dom";
import "./App.css";

import { AddEventPage } from "./pages/CreateEvent/AddEventPage";

import { ChatPage } from "./pages/Chat/ChatPage";
import EventsPage from "./pages/Event/EventsPage";
import EventsUserPage from "./pages/Event/EventsUserPage";
import HomePageParent from "./pages/Home/HomePageParent";
import { HomePageSchool } from "./pages/Home/HomePageSchool";
import { ChangePassword } from "./pages/Login/ChangePasswordPage";
import LoginPage from "./pages/Login/LoginPage";
import NotificationPage from "./pages/Notification/NotificationPage";
import { ProfilPage } from "./pages/Profil/ProfilPage";
import { ParentSignUpPage } from "./pages/Schools/ParentSignUpPage";
import { ParentTeacherSignUp } from "./pages/Schools/ParentTeacherSignUpPage";
import { SchoolCreateUser } from "./pages/Schools/SchoolCreateUserPage";
import { TeacherSignUpPage } from "./pages/Schools/TeacherSignUpPage";
import SearchByParentDetailPage from "./pages/Search/SearchByParentDetailPage";
import SearchByParentPage from "./pages/Search/SearchByParentPage";
import SearchBySchoolPage from "./pages/Search/SearchBySchoolPage";
import { HomePageTeacher } from "./pages/Teacher/HomePageTeacher";
import { ModalProvider } from "./services/Context/ModalContext";
import NotFoundPage from "./utils/NotFoundPage";
import PrivateRoute from "./utils/PrivateRoute";

import { EditMyProfil } from "./pages/EditProfilBySchool/EditMyProfil";
import EventPrivatePage from "./pages/EventPrivate/EventPrivatePage";
import EventPublicPage from "./pages/EventPublic/EventPublicPage";
import ProfilModifyPage from "./pages/Profil/ProfileModifyPage";
import ProfilePage from "./pages/Profil/ProfilePage";

function App() {
  return (
    <>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home_page_parent" element={<HomePageParent />} />
            <Route path="/home_page_school" element={<HomePageSchool />} />
            <Route path="/edit_my_profil" element={<EditMyProfil />} />

            <Route
              path="/event_public_page/information"
              element={<EventPublicPage />}
            />

            <Route
              path="/event_private_page/information"
              element={<EventPrivatePage />}
            />

            <Route path="/school_create_user" element={<SchoolCreateUser />} />
            <Route path="/parent_sign_up_page" element={<ParentSignUpPage />} />
            <Route
              path="/teacher_sign_up_page"
              element={<TeacherSignUpPage />}
            />
            <Route
              path="/parent_teacher_sign_up_page"
              element={<ParentTeacherSignUp />}
            />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/search_by_parent" element={<SearchByParentPage />} />
            <Route path="/search_by_school" element={<SearchBySchoolPage />} />
            <Route path="/for_you_event" element={<EventsUserPage />} />
            <Route path="/all_events" element={<EventsPage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route
              path="/search_by_parent_detail/:id"
              element={<SearchByParentDetailPage />}
            />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/change_password" element={<ChangePassword />} />
            <Route path="/home_page_teacher" element={<HomePageTeacher />} />
            <Route path="/participation" element={<ProfilePage />} />
            <Route path="/profil" element={<ProfilModifyPage />} />
            <Route path="/add_event_page" element={<AddEventPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ModalProvider>
    </>
  );
}

export default App;
