import { useState } from "react";
import UserCard from "../../components/Card/UserCard";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const usersBySchool = [
    {
      id: 1,
      first_name: "Jean-Claude",
      last_name: "Pierre",
      avatar: "./public/profil1.png",
    },
    {
      id: 2,
      first_name: "Marie",
      last_name: "Johnson",
      avatar: "./public/profil2.png",
    },
    {
      id: 3,
      first_name: "Antoine",
      last_name: "Dupont",
      avatar: "./public/profil3.png",
    },
    {
      id: 4,
      first_name: "Sophie",
      last_name: "Martin",
      avatar: "./public/profil13.png",
    },
    {
      id: 5,
      first_name: "Sophie",
      last_name: "Martin",
      avatar: "./public/profil6.png",
    },
    {
      id: 6,
      first_name: "Sophie",
      last_name: "Martin",
      avatar: "./public/profil7.png",
    },
    {
      id: 7,
      first_name: "Jean-Claude",
      last_name: "Pierre",
      avatar: "./public/profil8.png",
    },
    {
      id: 8,
      first_name: "Marie",
      last_name: "Johnson",
      avatar: "./public/profil9.png",
    },
    {
      id: 9,
      first_name: "Antoine",
      last_name: "Dupont",
      avatar: "./public/profil10.png",
    },
    {
      id: 10,
      first_name: "Marie",
      last_name: "Johnson",
      avatar: "./public/profil12.png",
    },
    {
      id: 11,
      first_name: "Antoine",
      last_name: "Dupont",
      avatar: "./public/profil11.png",
    },
  ];

  const searchUsers = (query) => {
    const filteredUsers = usersBySchool.filter((user) => {
      const fullName = `${user.first_name} ${user.last_name}`;
      return fullName.toLowerCase().includes(query.toLowerCase());
    });
    setSearchResults(filteredUsers);
    setSearchQuery(query);
  };
  return (
    <>
      <SearchBar handleSearch={searchUsers} />
      <section className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="w-full md:w-1/2">
          {searchQuery && searchResults.length === 0 && (
            <p className="text-gray-500  text-center py-5">
              Aucun utilisateur ne correspond à votre recherche.
            </p>
          )}
          <article className="grid grid-cols-2 justify-center m-auto md:grid-cols-4 lg:grid-cols-6">
            {searchResults.map((user, index) => (
              <UserCard key={index} user={user} />
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
