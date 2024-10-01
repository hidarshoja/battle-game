import React from "react";

export default function WinBattles() {
  const battles = [
    {
      id: "#32400254",
      winValue: "35.7",
      players: [
        "https://randomuser.me/api/portraits/men/52.jpg",
        "https://randomuser.me/api/portraits/men/69.jpg",
        "https://randomuser.me/api/portraits/men/71.jpg",
        "https://randomuser.me/api/portraits/men/34.jpg",
      ],
    },
    {
      id: "#32400255",
      winValue: "28.5",
      players: [
        "https://randomuser.me/api/portraits/men/35.jpg",
        "https://randomuser.me/api/portraits/men/61.jpg",
        "https://randomuser.me/api/portraits/men/82.jpg",
      ],
    },
    {
      id: "#32400256",
      winValue: "40.2",

      players: [
        "https://randomuser.me/api/portraits/men/95.jpg",
        "https://randomuser.me/api/portraits/men/99.jpg",
        "https://randomuser.me/api/portraits/men/41.jpg",
        "https://randomuser.me/api/portraits/men/25.jpg",
      ],
    },
    {
      id: "#32400257",
      winValue: "40.2",
      players: [
        "https://randomuser.me/api/portraits/men/38.jpg",
        "https://randomuser.me/api/portraits/men/77.jpg",
        "https://randomuser.me/api/portraits/men/88.jpg",
        "https://randomuser.me/api/portraits/men/30.jpg",
      ],
    },
  ];

  return (
    <div className="py-4 flex flex-col gap-6">
      {battles.map((battle, index) => (
        <div key={index} className="leaderboard__profile show">
          <div
            className="leaderboard__images"
            data-players={battle.players.length}
          >
            {battle.players.map((player, i) => (
              <img key={i} src={player} alt={`Player ${i + 1}`} />
            ))}
          </div>
          <span className="leaderboard__btlid">ID: {battle.id}</span>

          {battle.winValue && (
            <span className="leaderboard__value-win">
              {battle.winValue} <span>TON</span>
            </span>
          )}

          {battle.loessValue && (
            <span className="leaderboard__value-loess">
              {battle.loessValue} <span>TON</span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
