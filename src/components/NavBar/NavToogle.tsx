import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

export default function NavToogle({ onTabChange, activeTab }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsFixed(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` flex justify-between items-end text-sm text-gray-500 bg-white dark:text-gray-400 md:px-6 pt-5 border-gray-100 shadow-sm  ${
        isFixed ? "z-50  fixed top-0 left-0 right-0" : ""
      }`}
    >
      <section className="grid grid-cols-2 w-full text-center h-8 lg:flex gap-3">
        <a
          className={`nav-toggle-link mx-4 px-4 ${
            activeTab === "ForYou" ? "toggle_is_active" : ""
          }`}
          onClick={() => onTabChange("ForYou")}
        >
          Pour vous
        </a>

        <a
          className={`nav-toggle-link mx-4 px-4 ${
            activeTab === "All" ? "toggle_is_active" : ""
          }`}
          onClick={() => onTabChange("All")}
        >
          Tous
        </a>
      </section>
      <section className="hidden lg:flex gap-2 items-center">
        <IconButton aria-label="delete" size="large">
          <FilterAltIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <ControlPointIcon fontSize="inherit" />
        </IconButton>
      </section>
    </nav>
  );
}
