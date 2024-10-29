import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useModal } from "../../services/Context/ModalContext";

export const NavBarProfil = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  const { openLogOut } = useModal();

  return (
    <div
      className={`flex justify-between bg-white items-center py-5 px-4 border-b-2 ${
        visible
          ? "transform translate-y-0 z-10"
          : "transform -translate-y-full z-0"
      }`}
    >
      <IconButton aria-label="delete" size="large" onClick={openLogOut}>
        <LogoutOutlinedIcon fontSize="inherit"
          />
      </IconButton>
      <h2 className="text-2xl">Profil</h2>
      <NavLink to={"/edit_my_profil"}>
        <IconButton aria-label="settings" size="large">
          <SettingsOutlinedIcon fontSize="inherit" />
        </IconButton>
      </NavLink>
    </div>
  );
};
