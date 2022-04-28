import React from 'react';

export default function PlayerItem({ players }) {
  return (
    <div className="player-item">
      <div>
        <h2>{players.name}</h2>
        <h3>{players.age}</h3>
      </div>
      <div className="lists">
        <div>
          tags:
          <ul className="tags">
            <li>{players.tags.name}</li>
            <li>{players.tags.stadium}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
