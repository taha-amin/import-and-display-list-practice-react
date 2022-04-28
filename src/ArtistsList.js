import React from 'react';
import ArtistsItem from './ArtistsItem.js';

export default function ArtistsList({ artists }) {
  return (
    <div className="artists-list">
      {artists.map((artist) => (
        <ArtistsItem key={artist.id} artists={artist} />
      ))}
    </div>
  );
}
