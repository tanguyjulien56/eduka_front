import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBottom from "./components/NavBar/NavBottom";
import AllEvents from "./pages/Home/AllEvents";
import ForYouEvent from "./pages/Home/ForYouEvent";
import HomePage from "./pages/Home/HomePage";
import NotifPage from "./pages/NotifPage/NotifPage";
import ProfilPage from "./pages/Profil/ProfilPage";
import SearchPage from "./pages/Search/SearchPage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notification" element={<NotifPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/for_you_event" element={<ForYouEvent />} />
          <Route path="/all_events" element={<AllEvents />} />
        </Routes>
        <NavBottom />
      </div>
    </>
  );
}

export default App;
