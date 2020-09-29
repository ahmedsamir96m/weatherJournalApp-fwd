/* Global Variables */
const apiKey = "f3dd4d99772d41e15b26f5fc6a2b683c";
const baseURL = `https://api.openweathermap.org/data/2.5/forecast?zip=`;

// Create a new date instance dynamically with JS
let currentDate = new Date();
let newDate =
  currentDate.getMonth() +
  "." +
  currentDate.getDate() +
  "." +
  currentDate.getFullYear();
