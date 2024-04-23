
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="lg:hidden">
      <div className="h-20 " />
      <nav
        className={`fixed top-0 bg-white left-0 right-0 w-full flex justify-end items-center py-5 px-4 transition-transform duration-300 ${
          visible
            ? "transform translate-y-0 z-50"
            : "transform -translate-y-full z-0"
        }`}
      >
        <section className="absolute left-1/2 transform -translate-x-1/2 flex justify-center h-10 z-50">
          <img src="./public/logo.png" alt="eduka" />
        </section>
        <section>
        <NavLink to="/profil" className="nav-link-avatar">
        <Avatar
          alt="Cindy Baker"
          src="/public/profil.png"
          className="nav-avatar"
        />
      </NavLink>
        </section>
      </nav>
    </div>
  );
}
