import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBottom from "./components/NavBar/NavBottom";
import NavTop from "./components/NavBar/NavTop";
import NavTopLarge from "./components/NavBar/NavTopLarge";
import EventsPage from "./pages/Event/EventsPage";
import EventsUserPage from "./pages/Event/EventsUserPage";
import HomePage from "./pages/Home/HomePage";
import NotificationPage from "./pages/Notification/NotificationPage";
import ProfilPage from "./pages/Profil/ProfilPage";
import SearchPage from "./pages/Search/SearchPage";
import NotFoundPage from "./utils/NotFoundPage";
import PrivateRoute from "./utils/PrivateRoute";
import LoginPage from "./pages/Login/LoginPage";
import HideNavbar from "./components/HideNavbar/HideNavbar";


function App() {
  return (
    <>
      <HideNavbar>
        <NavTop />
        <NavTopLarge />
      </HideNavbar>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="/for_you_event" element={<EventsUserPage />} />
            <Route path="/all_events" element={<EventsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <HideNavbar>
          <NavBottom />
        </HideNavbar>
      </div>
    </>
  );
}

export default App;

