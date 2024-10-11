// import {
//   Avatar,
//   Button,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   IconButton,
//   Typography,
// } from "@mui/material";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Avatar } from "@mui/material";

import { FormattedEventCardInterface } from "../../services/interfaces/event";
import { formatRelativeDate } from "../../utils/CalculRelative/FormatRelativeDate";

interface CardEventPropsInterface {
  event: FormattedEventCardInterface;
}
export default function CardEvent(props: CardEventPropsInterface) {
  const { event } = props;

  return (
    <div className="relative w-full  grid grid-rows-4 h-fit  bg-white shadow-sm border border-slate-200 rounded-lg ">
      {/* Image Section */}
      <div className="relative row-span-2 h-40 m-2.5 overflow-hidden rounded-md">
        <div className="absolute right-2 top-2 text-sm text-gray-700 dark:text-gray-400 z-5 p-1 rounded-sm bg-white opacity-70">
          <LocationOnIcon />
          <span>{event.address?.city ? event.address.city : "Non défini"}</span>
        </div>
        <img
          className="object-cover w-full h-full"
          src={
            event.picture
              ? event.picture
              : "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          }
          alt="card-image"
        />
      </div>

      {/* Text Section */}
      <div className="row-span-3 px-4 flex flex-col">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <CalendarTodayIcon sx={{ width: 24, height: 24 }} />
          <p> {formatRelativeDate(event.start_date)}</p>
        </div>
        <h6 className=" text-slate-800 text-xl font-semibold my-3">
          {event.title}
        </h6>
        <p className="text-slate-600 leading-normal font-light line-clamp-3 h-[4.5rem]">
          {event.description}
        </p>
        <section className="flex flex-col text-sm text-slate-600 font-light my-4 gap-1">
          <div className="flex items-center gap-2">
            <Avatar
              alt="profil_picture"
              src={event.user.profil_picture}
              sx={{ width: 24, height: 24 }}
            />

            <p>de {event.user.firstname}</p>
          </div>
        </section>
      </div>

      {/* Button Section */}
      {/* <div className="row-span-1 flex inline-flex items-end px-4 pb-4">
        <button
          className="rounded-md bg-custom-blue py-2 px-4 w-full text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Lire Plus
        </button>
      </div> */}
    </div>
  );
}
