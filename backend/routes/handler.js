const express = require('express');
const router = express.Router();
const dotenv = require("dotenv")


router.get('/tweets', (req,res)=>{
    const str = [{
        "name":"Talha Rashid",
        "msg":"This is my first tweet"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req,res)=>{
    res.end('NA');
})

module.exports= router;