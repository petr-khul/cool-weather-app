export async function fetchWeatherData(cityName) {
    
    const apiKey = "ed42380262a74066279b4ceac779f66d";
    
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${baseUrl}?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Weather Data:', data);
      return data;
    } catch (error) {
      console.error('Fetch error:', error.message);
      return null;
    }
  }
  
  // Example usage:
  // const apiKey = 'YOUR_API_KEY';
  // fetchWeatherData('London', apiKey);
  