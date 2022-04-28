import React from 'react';
import ArtistsItem from './ArtistsItem.js';

export default function ArtistsList({ artists }) {
  return (
    <div className="artists-list">
      {artists.map((artist, index) => (
        <ArtistsItem key={artist + index} artists={artist} />
      ))}
    </div>
  );
}
