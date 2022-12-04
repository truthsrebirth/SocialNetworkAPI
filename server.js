// import the modules
const express = require('express')
const mongoose = require('mongoose');
const moment = require('moment');

// Initializing the express and port number
const app = express()
const PORT = process.env.PORT || 3001;

// Link to the Routes folder within the directory
app.use("/api", require("./Routes"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This will log in the terminal
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});