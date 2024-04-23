import { useState } from "react";
import NavToogle from "../../components/NavBar/NavToogle";
import EventsPage from "../Event/EventsPage";
import EventsUserPage from "../Event/EventsUserPage";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState("ForYou");

  const handleTabChange = (tab: any) => {
    setSelectedTab(tab);
  };

  return (
    <div className="pb-20 ">
      <NavToogle onTabChange={handleTabChange} activeTab={selectedTab} />
      {selectedTab === "ForYou" ? <EventsUserPage /> : <EventsPage />}
    </div>
  );
}
