import React from 'react';
import CandyItem from './CandyItem.js';

export default function CandiesList({ candies }) {
  return (
    <div className="candy-list">
      {
        candies.map((candy) => 
          <CandyItem key={candy} candy={candy} />)
      }
    </div>
  );
}