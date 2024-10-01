import  { useState } from "react";
import PlayBox from "./PlayBox";
import BattlesComponent from "./BattlesComponent";
import LoessBattles from "./LossBattles";
import WinBattles from "./WinBattles";

const TabsPlay = () => {
  const [activeTab, setActiveTab] = useState("Play");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Play":
        return (
          <div>
            <PlayBox />
          </div>
        );
      case "Battles":
        return (
          <div>
            <BattlesComponent />
          </div>
        );
      case "Wins":
        return (
          <div>
            {" "}
            <WinBattles />{" "}
          </div>
        );
      case "Losses":
        return (
          <div>
            {" "}
            <LoessBattles />{" "}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-6">
      <div className="flex w-full items-center justify-between">
        {["Play", "Battles", "Wins", "Losses"].map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer p-2  text-lg transition-colors duration-200 
                        ${
                          activeTab === tab
                            ? "text-white font-bold border-b-4 border-white"
                            : "text-[#FFFFFF33]"
                        }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default TabsPlay;
