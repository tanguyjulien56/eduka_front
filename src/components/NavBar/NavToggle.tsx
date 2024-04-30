import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useModal } from "../../services/Context/ModalContext";

interface NavTogglePropsInterface {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

export default function NavToggle(props: NavTogglePropsInterface) {
  const { onTabChange, activeTab } = props;
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [hasSelectedCategories, setHasSelectedCategories] =
    useState<boolean>(false);

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

  const { openModal } = useModal();

  useEffect(() => {
    // Vérifie si des filtres sont appliqués lors du chargement initial du composant
    const storedCategories = localStorage.getItem("selectedCategories");
    setHasSelectedCategories(
      !!storedCategories && JSON.parse(storedCategories).length > 0
    );
  }, []);

  useEffect(() => {
    // Vérifie si des filtres sont appliqués lors de chaque changement de page
    const storedCategories = localStorage.getItem("selectedCategories");
    setHasSelectedCategories(
      !!storedCategories && JSON.parse(storedCategories).length > 0
    );
  }, [props.activeTab]); // Réagit aux changements de page

  useEffect(() => {
    // Vérifie s'il y a des catégories sélectionnées dans le local storage
    const storedCategories = localStorage.getItem("selectedCategories");
    setHasSelectedCategories(
      !!storedCategories && JSON.parse(storedCategories).length > 0
    );
  }, [localStorage.getItem("selectedCategories")]);

  // Écouteur pour détecter les changements d'URL
  useEffect(() => {
    // Réinitialiser la couleur du filtre lorsque la page change
    setHasSelectedCategories(false);
  }, [location]); // Utilisation de history.location.pathname

  return (
    <nav
      className={` flex justify-between items-end text-sm text-gray-500 bg-white dark:text-gray-400 md:px-6 pt-8 border-gray-100 shadow-sm  ${
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
        <IconButton aria-label="filter" size="large">
          <FilterAltIcon
            fontSize="inherit"
            style={{ color: hasSelectedCategories ? "#0fa3b1" : "inherit" }}
            onClick={openModal}
          />
        </IconButton>
        <IconButton aria-label="filter" size="large">
          <ControlPointIcon fontSize="inherit" />
        </IconButton>
      </section>
    </nav>
  );
}
