import { Avatar } from "@mui/material";
import { userInterface } from "../../services/interfaces/user";

interface CardEventPropsInterface {
  user: userInterface;
}

export default function CardEvent(props: CardEventPropsInterface) {
  const { user } = props;
  return (
    <article className="flex flex-col items-center gap-3 pb-2 m-8">
      <Avatar src={user.avatar} sx={{ width: 112, height: 112 }} />
      <p>{`${user.first_name} ${user.last_name}`}</p>
    </article>
  );
}
