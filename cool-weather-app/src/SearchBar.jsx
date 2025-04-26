import React, { useState } from 'react';

function SearchBar({ fetchWeather }) {  // Get the fetchWeather function as a prop
  
  const [cityName, setCityName] = useState("");

  const handleInputchange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Prevent form submission if cityName is empty
    if (!cityName.trim()) {
      alert("Please enter a city name.");
      return; // Exit if input is empty
    }
    
    // Call the fetchWeather function passed down as a prop
    fetchWeather(cityName);  // Now fetchWeather is handled in App.js
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search a location..."
        value={cityName}
        onChange={handleInputchange}
      />
      <button type="submit" onClick={handleSearchSubmit}>Submit</button>
    </div>
  );
}

export default SearchBar;
