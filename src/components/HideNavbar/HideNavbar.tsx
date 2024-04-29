import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function HideNavbar({ children }:any) {
  const location = useLocation();
  const [ShowNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    //ligne 11 here we test the message from cosole on every possible URL ex /search /notification 
    console.log("this is location:", location);

    if (location.pathname === "/") {
      setShowNavbar(false);
    }else{
        setShowNavbar(true);
    }
  }, [location]);

  return <div> {ShowNavbar && children} </div>;
}
