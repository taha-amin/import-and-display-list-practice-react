import React from 'react';
import PlayerItem from './PlayerItem.js';

export default function PlayerList({ players }) {
  return (
    <div className="player-list">
      {players.map((player) => (
        <PlayerItem key={player.id} players={player} />
      ))}
    </div>
  );
}
