import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageSchool from "./pages/Home/HomePageSchool";
import NavBar from "./components/NavBar/NavTopSchool";

function App() {
  return (
    <>
    <NavBar />
        <Routes>
          <Route path="/" element={<HomePageSchool />} />
        </Routes>
    </>
  );
}

export default App;
