/* Global Variables */
const apiKey = "&appid=f3dd4d99772d41e15b26f5fc6a2b683c";
const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
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
async function getCityWeather(url, zip, key) {
  const response = await fetch(url + zip + key);
  try {
    const cityWeatherData = response.json();
    console.log(cityWeatherData);
    return cityWeatherData;
  } catch (error) {
    // handling errors in case the api call didn't make it
    console.log(`Ops!, an error happened!
        ${error}
      `);
  }
}

// initialize function to POST data to the server
async function postData(url = "", data = {}) {
  const resp = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log(data);

  try {
    const brandNewData = await resp.json();
    return brandNewData;
  } catch (error) {
    console.log(`catched an error ${error}`);
  }
}

// initialize function to GET data from the server and use it to update the UI
const updateSectionUI = async () => {
  const req = await fetch("/allData");
  try {
    const jsonData = await req.json();
    console.log(jsonData);
    document.getElementById(
      "date"
    ).innerHTML = `Current Date: ${jsonData.date}`;
    document.getElementById(
      "temp"
    ).innerHTML = `Temperature is: ${jsonData.temp} ℉`;
    document.getElementById(
      "content"
    ).innerHTML = `What I'm feeling: ${jsonData.feeling}`;
  } catch (error) {
    console.log(error);
  }
};

// callback function to get the user inputs, call the api function, and post the data to the server
function performAction() {
  const zipCode = document.getElementById("zip").value;
  const userFeelings = document.getElementById("feelings").value;
  getCityWeather(baseURL, zipCode, apiKey).then((data) => {
    postData("/received", {
      temp: data.main.temp,
      date: currentDate,
      feeling: userFeelings,
    });
    updateSectionUI();
  });
}
// event listener to perforrm action when the user click the generate button
generateBtn.addEventListener("click", performAction);
