const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const runDB = require("./config/db.js")

/*
    index js file to run backend

    To run server by itself type npm run server on current directory "backend"
*/

const app= express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
dotenv.config();
runDB();

const PORT = process.env.PORT; // env file holds port value of 4000, while front end runs on 3000 of localhost


app.get("/all", (req,res) =>{
    runDB.collection;
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`)
});