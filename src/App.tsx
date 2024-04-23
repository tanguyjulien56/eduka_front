import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBottom from "./components/NavBar/NavBottom";
import NavTop from "./components/NavBar/NavTop";
import NavTopLarge from "./components/NavBar/NavTopLarge";
import AllEvents from "./pages/Home/AllEvents";
import ForYouEvent from "./pages/Home/ForYouEvent";
import HomePage from "./pages/Home/HomePage";
import NotifPage from "./pages/NotifPage/NotifPage";
import ProfilPage from "./pages/Profil/ProfilPage";
import SearchPage from "./pages/Search/SearchPage";
import NotFoundPage from "./utils/Not FoundPage";

function App() {
  return (
    <>
      <NavTop />
      <NavTopLarge />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notification" element={<NotifPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/for_you_event" element={<ForYouEvent />} />
          <Route path="/all_events" element={<AllEvents />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <NavBottom />
      </div>
    </>
  );
}

export default App;
