import SearchBar from './Components/SearchBar/SearchBar.js'
import WeatherFrame from './Components/WeatherFrame/WeatherFrame.js';
import DayFrame from './Components/DayFrame/DayFrame.js';
import WeekFrame from './Components/WeekFrame/WeekFrame.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <div className = "components-container">
      <div className = "weather-day-container">
        <WeatherFrame/>
        <DayFrame/>
      </div>
      <div className ="week-container" >
      <WeekFrame/>
      </div>
      </div>
    </div>
  );
}

export default App;
