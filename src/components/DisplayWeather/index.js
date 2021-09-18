
import "./style.css";

const DisplayWeather = ({info:{weatherData:{temperature}, city}}) => {

  return (
    <div className="display-container">
      <div className="display-city">{city}</div>
      <div className="display-temperature">{temperature}</div>
    </div>
  );
}

export default DisplayWeather;
 