
// Express to run server and routes
const express = require('express');
const port = 8000;

// Start up an instance of app
const app = express();
/* Dependencies */
const bParser = require('body-parser');

/* Middleware*/
const cor = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bParser.urlencoded({extended: false}));
app.use(bParser.json());

// Cors for cross origin allowance
app.use(cor());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const server = app.listen(port, listening());

// Callback to debug
function listening () {
    console.log(`server running on: ${port}`)
}