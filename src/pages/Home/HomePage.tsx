import { useState } from "react";
import NavToggle from "../../components/NavBar/NavToggle";
import EventsPage from "../Event/EventsPage";
import EventsUserPage from "../Event/EventsUserPage";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState<string>("ForYou");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="pb-20 ">
      <NavToggle onTabChange={handleTabChange} activeTab={selectedTab} />
      {selectedTab === "ForYou" ? <EventsUserPage /> : <EventsPage />}
    </div>
  );
}
