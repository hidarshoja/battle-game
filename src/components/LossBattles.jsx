import React from "react";

export default function LoessBattles() {
  const battles = [
    {
      id: "#32400254",
      loessValue: "35.7",
      players: [
        "https://randomuser.me/api/portraits/men/9.jpg",
        "https://randomuser.me/api/portraits/men/6.jpg",
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/men/4.jpg",
      ],
    },
    {
      id: "#32400255",
      loessValue: "28.5",
      players: [
        "https://randomuser.me/api/portraits/men/89.jpg",
        "https://randomuser.me/api/portraits/men/11.jpg",
        "https://randomuser.me/api/portraits/men/22.jpg",
      ],
    },
    {
      id: "#32400256",
      loessValue: "22.9",

      players: [
        "https://randomuser.me/api/portraits/men/15.jpg",
        "https://randomuser.me/api/portraits/men/91.jpg",
        "https://randomuser.me/api/portraits/men/10.jpg",
        "https://randomuser.me/api/portraits/men/46.jpg",
      ],
    },
    {
      id: "#32400257",
      loessValue: "40.2",
      players: [
        "https://randomuser.me/api/portraits/men/94.jpg",
        "https://randomuser.me/api/portraits/men/87.jpg",
        "https://randomuser.me/api/portraits/men/70.jpg",
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
