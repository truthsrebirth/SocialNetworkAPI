// declare packages as variables
const express = require('express')
const mongoose = require('mongoose');
const moment = require('moment');

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));