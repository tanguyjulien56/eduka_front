import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { FormattedEventCardInterface } from "../../services/interfaces/event";
import { formatRelativeDate } from "../../utils/CalculRelative/FormatRelativeDate";

interface CardEventPropsInterface {
  event: FormattedEventCardInterface;
}
export default function CardEvent(props: CardEventPropsInterface) {
  const { event } = props;
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
    <Card
      sx={{ maxWidth: 400, maxHeight: 500 }}
      variant="outlined"
      className="relative shadow-md h-auto"
    >
      <p className="absolute right-2 top-2 text-sm text-gray-700 dark:text-gray-400 z-50 p-1 rounded-sm bg-white opacity-70">
        {formatRelativeDate(event.start_date)}
      </p>
      <CardActionArea>
        <CardMedia
          component="img"
          image={
            event.picture
              ? event.picture
              : "https://www.istockphoto.com/photo/happy-children-playing-together-in-park-gm1330261325-413735656?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fsortie%2520extrascolaire%2F&utm_term=sortie+extrascolaire"
          }
          style={{ height: 200, width: "100%", objectFit: "cover" }}
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {event.title}
          </Typography>

          <div className="flex flex-col justify-between py-2 text-sm text-gray-700">
            <p>
              <LocationOnIcon />{" "}
              {event.address?.city ? event.address.city : "Non défini"}
            </p>
          </div>
          <p
            ref={textRef}
            className="text-sm text-gray-700 dark:text-gray-400 overflow-hidden pr-8 h-10 lg:h-20 "
          >
            {event.description}
          </p>

          <section className="flex justify-between items-center text-sm text-gray-700 py-2">
            <div className="flex items-center">
              <IconButton size="small">
                <Avatar
                  alt="profil_picture"
                  src={event.user.profil_picture}
                  sx={{ width: 24, height: 24 }}
                />
              </IconButton>
              <p>de {event.user.firstname}</p>
            </div>
          </section>
        </CardContent>
      </CardActionArea>
      <Button
        className="absolute bottom-0 right-0"
        style={{ backgroundColor: "#ffff", color: "#0fa3b1", fontSize: 14 }}
      >
        Voir plus
      </Button>
    </Card>
  );
}
