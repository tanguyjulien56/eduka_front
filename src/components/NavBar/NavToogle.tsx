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
      className={` text-sm text-gray-500 bg-white dark:text-gray-400 md:px-6 pt-5 border-gray-100 shadow-sm ${
        isFixed ? "z-50  fixed top-0 left-0 right-0" : ""
      }`}
    >
      <div className="grid grid-cols-2 w-full text-center h-8">
        <div
          className={`nav-toggle-link mx-4 ${
            activeTab === "ForYou" ? "toggle_is_active" : ""
          }`}
          onClick={() => onTabChange("ForYou")}
        >
          Pour vous
        </div>

        <div
          className={`nav-toggle-link mx-4 ${
            activeTab === "All" ? "toggle_is_active" : ""
          }`}
          onClick={() => onTabChange("All")}
        >
          Tous
        </div>
      </div>
    </nav>
  );
}
