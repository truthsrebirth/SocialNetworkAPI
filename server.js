// import the modules
const express = require('express')
const mongoose = require('mongoose');
const moment = require('moment');

// Initializing the express and port number
const app = express()
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));