import React from 'react';

export default function CandyItem({ candy }) {
  return (
    <div className="candy-item">
      <p>{candy}</p>
    </div>
  );
}