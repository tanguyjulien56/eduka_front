import { useState } from "react";
import NavToggle from "../../components/NavBar/NavToggle";
import EventsPage from "../Event/EventsPage";
import EventsUserPage from "../Event/EventsUserPage";
import NavTop from "../../components/NavBar/NavTop";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState<string>("ForYou");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <NavTop />
      <div className="pb-20 ">
        <NavToggle onTabChange={handleTabChange} activeTab={selectedTab} />
        {selectedTab === "ForYou" ? <EventsUserPage /> : <EventsPage />}
      </div>
    </>
  );
}
