import CardEvent from "../../components/Card/CardEvent";

const events = [
  {
    name: "Véronique",
    title: "Sortie au parc",
    description: "Une journée de détente et de jeux au parc",
    date: "2024-04-20",
    image: "/images/park.jpg",
    avatar_name: "/public/profil3.png",
  },
  {
    name: "Chantal",
    title: "Atelier de peinture",
    description:
      "Venez libérer votre créativité lors de notre atelier de peinture !",
    date: "2024-04-25",
    image: "/images/painting.jpg",
    avatar_name: "/public/profil2.png",
  },
  {
    name: "Bernadette",
    title: "Match de football",
    description:
      "Venez soutenir notre équipe lors du match de football contre nos rivaux !",
    date: "2024-04-30",
    image: "/images/football.jpg",
    avatar_name: "/public/profil2.png",
  },
];

export default function ForYouEvent() {
  return (
    <div>
      {events.map((event, index) => (
        <CardEvent key={index} event={event} />
      ))}
    </div>
  );
}
