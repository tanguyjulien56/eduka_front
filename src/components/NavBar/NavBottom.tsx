import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton } from "@mui/material";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 grid grid-cols-4 justify-center w-full py-5 px-3 items-center border-t border-gray-100  ">
      <IconButton aria-label="delete" size="large">
        <HomeIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <NotificationsNoneIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <SearchIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <Avatar alt="Cindy Baker" src="/public/profil.png" />
      </IconButton>
    </nav>
  );
}
