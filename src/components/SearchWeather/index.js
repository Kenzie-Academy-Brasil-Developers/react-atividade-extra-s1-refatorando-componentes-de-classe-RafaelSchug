import { useState } from "react";

import "./style.css";

const SearchWeather = ({handleChangeWeather}) => {
  
  const [inputValue, setInputValue] = useState('Curitiba')

  const handleSubmit = (input) => {
    fetch(`https://goweather.herokuapp.com/weather/${input}`)
      .then((response) => response.json())
      .then((response) => handleChangeWeather(response, input));
  };

  return (
    <div className="search-container">
      <div>
        <input
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button className="search-button" onClick={()=>handleSubmit(inputValue)}>
          Search
        </button>
      </div>
    </div>
  );
}


export default SearchWeather;