// Setup empty JS object to act as endpoint for all route
projectData = {};

// Express to run server and routes
var express = require("express");
// Start up an instance of app
var app = express();

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('node_project'));

// Spin up the server
const port = 3000;
const server = app.listen(port, listening);

function listening() {
    console.log(`the port of this server is ${port}`);
}
// Callback to debug
app.use(function(request, response) {
    response.end("Hello world!");
});

// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get('/all', sendData);

function sendData(req, res) {
    res.send(projectData);
};

// Post Route
data = [];
app.post('/', function(req, res) {
    res.send('POST received')
})

app.post('/temperature', );

function addTemperature(req, res) {
    data.push(req.body);
}

app.post('/date', addDate);

function addDate(req, res) {
    data.push(req.body);
}
app.post('/userresponse', addUserResponse);

function addUserResponse(req, res) {
    data.push(req.body);
}