import React from 'react';

export default function DogItem({ name, age, color }){
  return (
    <div className='dog-item' style={{ background: color }}>
      <p>{name}</p>
      <p>{age} years old</p>
      <p>{color}</p>
    </div>
  );
}