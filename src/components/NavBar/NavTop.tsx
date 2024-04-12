import CloseIcon from "@mui/icons-material/Close";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { IconButton } from "@mui/material";

export default function NavBar() {
  return (
    <nav className="w-full grid grid-cols-4 items-center border-b py-5 border-gray-100 shadow-sm  ">
      <IconButton aria-label="delete" size="large" className="flex justify-end">
        <CloseIcon fontSize="inherit" />
      </IconButton>
      <section className="col-span-2 flex justify-center h-12">
        <img src="./public/logo.png" alt="eduka" />
      </section>
      <IconButton aria-label="delete" size="large" className="flex justify-end">
        <ControlPointIcon fontSize="inherit" />
      </IconButton>
    </nav>
  );
}
