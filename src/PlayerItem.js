import react from 'react';

export default function PlayerItem({ players }) {
  return (
    <div className='player-item'>
      <div>
        <h2>{players.name}</h2>
        <h3>{players.age}</h3>
      </div>
      <div className='lists'>
        <div>
                    tags:
          <ul className='tags'>
            {players.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}