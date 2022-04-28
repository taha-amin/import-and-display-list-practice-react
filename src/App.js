//import logo from './logo.svg';
import './App.css';

//import your arrays here
import CandiesList from './CandiesList';
import { candies } from './candies-data';

import DogList from './DogList';
import { dogs } from './dogs-data';

function App() {
  return (
    <div className="App">

      <div className='candies'>
        <CandiesList candies={candies} />
      </div>

      <div className='dogs'>
        <DogList dogs={dogs} />
      </div>
    </div>
  );
}

export default App;