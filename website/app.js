/* Global Variables */
const apiKey = "f3dd4d99772d41e15b26f5fc6a2b683c";
const baseURL = `https://api.openweathermap.org/data/2.5/forecast?zip=`;
const generateBtn = document.getElementById("generate");

// Create a new date instance dynamically with JS
let currentDate = new Date();
let newDate =
  currentDate.getMonth() +
  "." +
  currentDate.getDate() +
  "." +
  currentDate.getFullYear();

// async function to get the city weather
const getCityWeather = async (
  url = "https://api.openweathermap.org/data/2.5/forecast?zip=",
  key = "f3dd4d99772d41e15b26f5fc6a2b683c",
  zip = "12511"
) => {
  const response = await fetch(url + zip + key);
  try {
    const cityWeatherData = response.json();
    return cityWeatherData;
  } catch (error) {
    // handling errors in case the api call didn't make it
    console.log(`Ops!, an error happened!
        ${error}
      `);
  }
};
