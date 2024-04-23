import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Avatar, Button, Card, IconButton } from "@mui/material";
import { useEffect, useRef } from "react";
import FormatRelativeDate from "./FormatRelativeDate";

export default function CardEvent({ event }) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      textRef.current &&
      "webkitLineClamp" in document.documentElement.style
    ) {
      textRef.current.classList.add("line-clamp-3");
    }
  }, [textRef]);

  return (
    <Card className="relative mx-4 my-5 p-2">
      <section className="flex gap-3 pb-2">
        <img
          className="hidden lg:block w-32 h-32 object-cover rounded-lg shadow-md"
          src={event.image}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {event.title}
          </h5>
          <p className="hidden lg:text-sm text-gray-700 ">
            <LocationOnIcon /> {event.location}
          </p>
          <p
            ref={textRef}
            className="text-sm text-gray-700 dark:text-gray-400 overflow-hidden pr-8 h-10 lg:h-20 "
          >
            {event.description}
          </p>
        </div>
      </section>
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
        <div className="hidden lg:block">
          <Button
            variant="contained"
            style={{ backgroundColor: "#0fa3b1", color: "#fff", fontSize: 12 }}
          >
            Voir
          </Button>
        </div>
      </section>
      <section className="absolute top-1/2 right-3 transform -translate-y-1/2 lg:hidden">
        <IconButton aria-label="delete" size="small">
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </section>
    </Card>
  );
}
