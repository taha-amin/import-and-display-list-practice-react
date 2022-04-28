//import logo from './logo.svg';
import './App.css';

//import your arrays here
import CandiesList from './CandiesList';
import { candies } from './candies-data';

function App() {
  return (
    <div className="App">
      <div className='candies'>
        <CandiesList candies={candies} />
      </div>
    </div>
  );
}

export default App;