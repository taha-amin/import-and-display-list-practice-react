//import logo from './logo.svg';
import './App.css';

// import your arrays here
import CandiesList from './CandiesList';
import { candies } from './candies-data';

function App() {
  return (
    <div className="App">
        <CandiesList candies={candies} />
    </div>
  );
}

export default App;