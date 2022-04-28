import React from 'react';
import DogItem from './DogItem.js';

export default function DogList({ dogs }) {
  return (
    <div className='dog-list'>
      {
        dogs.map((dog) => <DogItem key={dog.name} {...dog} />)
      }
    </div>
  );
}