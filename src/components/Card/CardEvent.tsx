import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar, Card, IconButton } from "@mui/material";
import { useEffect, useRef } from "react";
import FormatRelativeDate from "./FormatRelativeDate";

export default function CardEvent({ event }) {
  const textRef = useRef(null);

  useEffect(() => {
    // Vérifier si la propriété line-clamp est prise en charge
    if ("webkitLineClamp" in document.documentElement.style) {
      textRef.current.classList.add("line-clamp-3");
    }
  }, []);

  return (
    <Card href="#" className="relative mx-4 my-5 p-2">
      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {event.title}
      </h5>
      <p
        ref={textRef}
        className="text-sm text-gray-700 dark:text-gray-400 overflow-hidden pr-8 h-12"
      >
        {event.description}
      </p>
      <section className="flex justify-between items-center text-sm text-gray-700">
        <div className="flex items-center">
          <IconButton aria-label="delete" size="small">
            <Avatar
              alt="Cindy Baker"
              src={event.avatar_name}
              sx={{ width: 24, height: 24 }}
            />
          </IconButton>
          <p>de {event.name}</p>
        </div>
        <p>{FormatRelativeDate(event.date)}</p>
      </section>
      <section className="absolute top-1/2 right-3 transform -translate-y-1/2">
        <IconButton aria-label="delete" size="small">
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </section>
    </Card>
  );
}
