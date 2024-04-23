import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavTop from "./components/NavBar/NavTop";

import NotFoundPage from "./utils/NotFoundPage";
import PrivateRoute from "./utils/PrivateRoute";
import HomePageSchool from "./pages/Home/HomePageSchool";

function App() {
  return (
    <>
      <NavTop />
      
      <div>
        <Routes>
          <Route path="/" element={<HomePageSchool />} />
          <Route element={<PrivateRoute />}>

          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
