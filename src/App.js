import { useState } from "react";

import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";

const App = () => {
  
  const [weather, setWeather] = useState({weatherInfo:{}, city: ""})
  
  const handleChangeWeather = (_weatherData, _city) => {
    setWeather({ weatherData: _weatherData, city: _city });
  };

  return (
    <div className="App">
        <SearchWeather handleChangeWeather={handleChangeWeather} />
        {weather.weatherData && <DisplayWeather info={weather} />}
    </div>
    
  )
}

export default App;
