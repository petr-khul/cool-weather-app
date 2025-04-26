import React, { useState } from 'react';  // Don't forget to import React and useState
import './App.css';
import SearchBar from './SearchBar';
import ShowWeather from './ShowWeather';
import { fetchWeatherData } from './handlers/fetchWeather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle the API call
  const fetchWeather = async (cityName) => {
    try {
      const weatherResponse = await fetchWeatherData(cityName);
      setWeatherData(weatherResponse); // Set the weather data
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Handle the error
      console.error(err); // Log the error for debugging
    }
  };

  return (
    <div className="mainAppBody">
      <h1 className="mainH1">CoolWeatherApp</h1>
      
      <SearchBar fetchWeather={fetchWeather} />
      <ShowWeather weatherData={weatherData} error={error} />
    </div>
  );
}

export default App;
