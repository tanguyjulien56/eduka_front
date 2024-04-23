import { useState } from "react";
import NavToogle from "../../components/NavBar/NavToogle";
import AllEvent from "./AllEvents";
import ForYouEvent from "./ForYouEvent";

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState("ForYou");

  const handleTabChange = (tab: any) => {
    setSelectedTab(tab);
  };

  return (
    <div className="pb-20 ">
      <NavToogle onTabChange={handleTabChange} activeTab={selectedTab} />
      {selectedTab === "ForYou" ? <ForYouEvent /> : <AllEvent />}
    </div>
  );
}
