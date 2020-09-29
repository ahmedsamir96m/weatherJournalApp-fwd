// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { request } = require("http");
const { response } = require("express");

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8080;
const listening = () => {
  console.log(`running of localhost on port ${port}`);
};

const server = app.listen(port, listening);

// initialize GET route and its callback function
const sendAllData = (request, response) => {
  response.send(projectData);
  console.log(projectData);
};
app.get("/allData", sendAllData);

// initialize POST route and its callback function
const receiveData = (response, request) => {
  console.log(request.body);
  newData = {
    temperature: request.body.temperature,
    date: request.body.date,
    userFeeling: request.body.feeling,
  };
};
app.post("/receivedData", receiveData);
