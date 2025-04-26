import React from 'react'

function ShowWeather( {weatherData, error }) {
    
        
    // First, show error if it exists
    if (error) {
        return (
        <p id="errorMessage">{error}</p>
        );
    }
    
    if (!weatherData) {

        return (
            <p id="noLocation">Enter a location to see current weather....</p> // or just return nothing
        )
      }
  
      if (weatherData){
        const currentTemperature = Math.round(weatherData.main.temp);
        const feelsLikeTemperature = Math.round(weatherData.main.feels_like);
        const windSpeed = Math.round(weatherData.wind.speed);
        const weather = weatherData.weather[0].main;

        return (
            <>
                <p className="location">Current weather in {weatherData.name}</p>
                <p id="temperature">{currentTemperature} °C</p>
                <p id="fellsLikeTemperature">Feels like {feelsLikeTemperature} °C</p>
                <p id="windSpeed">Wind speed {windSpeed} m/s</p>
                <p id="windSpeed">{weather}</p>

            </>       
        )
    }
}

export default ShowWeather
