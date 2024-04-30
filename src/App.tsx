import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBottom from "./components/NavBar/NavBottom";
import NavTopLarge from "./components/NavBar/NavTopLarge";
import EventsPage from "./pages/Event/EventsPage";
import EventsUserPage from "./pages/Event/EventsUserPage";
import HomePageParent from "./pages/Home/HomePageParent";
import NotificationPage from "./pages/Notification/NotificationPage";
import ProfilPage from "./pages/Profil/ProfilPage";
import SearchDetailPage from "./pages/Search/SearchDetailPage";
import SearchPage from "./pages/Search/SearchPage";
import { ModalProvider } from "./services/Context/ModalContext";
import NotFoundPage from "./utils/NotFoundPage";

function App() {
  return (
    <>
      <NavTopLarge />

      <ModalProvider>
        <Routes>
          <Route path="/" element={<HomePageParent />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/for_you_event" element={<EventsUserPage />} />
          <Route path="/all_events" element={<EventsPage />} />
          <Route path="/search_detail/:id" element={<SearchDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ModalProvider>

      <NavBottom />
    </>
  );
}

export default App;
