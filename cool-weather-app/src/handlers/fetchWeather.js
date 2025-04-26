export async function fetchWeatherData(cityName) {
    const apiKey = "ed42380262a74066279b4ceac779f66d";
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${baseUrl}?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
  
      const data = await response.json();
  
      if (!response.ok) {
        // If the city isn't found, OpenWeather returns a message like { cod: "404", message: "city not found" }
        throw new Error(data.message || 'Error fetching weather data');
        alert ("Error fetching weather data")
      }
  
      console.log('Weather Data:', data);
      return data;
    } catch (error) {
      console.error('Fetch error:', error.message);
      throw error;  // <--- THROW the error so the UI can catch and display it
    }
  }
  