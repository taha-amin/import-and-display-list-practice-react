//import logo from './logo.svg';
import './App.css';

//import your arrays here
import CandiesList from './CandiesList';
import { candies } from './candies-data';

import DogList from './DogList';
import { dogs } from './dogs-data';

import PlayerList from './PlayerList';
import { players } from './players-data';

import ArtistsList from './ArtistsList';
import { artists } from './artists-data.js';

function App() {
  return (
    <div className="App">
      <div className="candies">
        <CandiesList candies={candies} />
      </div>

      <div className="dogs">
        <DogList dogs={dogs} />
      </div>

      <div className="players">
        <PlayerList players={players} />
      </div>

      <div className="artists">
        <ArtistsList artists={artists} />
      </div>
    </div>
  );
}

export default App;
