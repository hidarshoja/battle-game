import React from "react";

export default function BattlesComponent() {
  const battles = [
    {
      id: "#32400254",
      winValue: "35.7",
      players: [
        "https://randomuser.me/api/portraits/men/92.jpg",
        "https://randomuser.me/api/portraits/men/60.jpg",
        "https://randomuser.me/api/portraits/men/7.jpg",
        "https://randomuser.me/api/portraits/men/74.jpg",
      ],
    },
    {
      id: "#32400255",
      winValue: "28.5",
      players: [
        "https://randomuser.me/api/portraits/men/85.jpg",
        "https://randomuser.me/api/portraits/men/51.jpg",
        "https://randomuser.me/api/portraits/men/21.jpg",
      ],
    },
    {
      id: "#32400256",
      loessValue: "22.9",

      players: [
        "https://randomuser.me/api/portraits/men/15.jpg",
        "https://randomuser.me/api/portraits/men/19.jpg",
        "https://randomuser.me/api/portraits/men/11.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
      ],
    },
    {
      id: "#32400257",
      winValue: "40.2",
      players: [
        "https://randomuser.me/api/portraits/men/34.jpg",
        "https://randomuser.me/api/portraits/men/67.jpg",
        "https://randomuser.me/api/portraits/men/90.jpg",
        "https://randomuser.me/api/portraits/men/76.jpg",
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
