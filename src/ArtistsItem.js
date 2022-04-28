import React from 'react';

export default function ArtistsItem({ artists }) {
  return (
    <div className="artist-item">
      <div>
        <h2>{artists.name}</h2>
        <h3>{artists.albums}</h3>
        <div className="lists">
          <div>
            songs:
            <ul className="songs">
              {artists.songs.map((song) => (
                <li key={song}>{song}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
