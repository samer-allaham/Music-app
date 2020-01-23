'use strict';
// console.log('hello')
require('dotenv').config();

const express = require('express');

const cors = require('cors');

const superagent = require('superagent');

const PORT = process.env.PORT || 8500;

// const pg = require('pg')

// const client = new pg.Client(process.env.DATABASE_URL);
let app = express();

const LYRICS_API_KEY = process.env.LYRICS_API_KEY
app.set('view engine', 'ejs');
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));
var request = require("request");


var options = {
    method: 'GET',
    url: 'https://mourits-lyrics.p.rapidapi.com/',
    qs: {artist: 'Bon Jovi', song: 'Livin\' on a prayer'},
    headers: {
      'x-rapidapi-host': 'mourits-lyrics.p.rapidapi.com',
      'x-rapidapi-key': 'eecd5fae1amsh533358a9cbb816dp1e354cjsn4ffd1b1a115c'
    }
  };
  

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    // console.log(response
    //     )
        var obj = JSON.parse(body);

    console.log(obj.result.lyrics);
});



app.post('/lyrics', (req, res) => {
    console.log('hiii', req.body);
    res.redirect('./')
})







































app.get('/', function (req, res) {

    res.status(200).send('hello sheyab')
});



app.get('*', (req, res) => {
    // console.log('this is for checking ', req);
    res.status(404).render('./pages/error', { erorr: '404 NOT FOUND' })
});


// client.connect()
// .then( () => {
app.listen(PORT, () => {
    console.log(`Host : ${PORT}`)
})

// }))

// process.on('uncaughtException', function (err) {
//     console.log('sheab is myerror',err);
// }); 

