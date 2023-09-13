const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config(); 

const ejs = require("ejs");
const app = express();

// *** Set up app *** // 
app.set("view engine", "ejs");
app.use(express.json());

// *** Setting up router *** //
let router = require("./routes/register")
app.use("/register", router);

// *** Set up database connection *** //
mongoose.connect(process.env.DATABASE_URL); 
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('connected', () => console.log("Connected to database!"));

// *** Set up app listening *** // 
app.listen(3000, () => console.log("Server started!"));