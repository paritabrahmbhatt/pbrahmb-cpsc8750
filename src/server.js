// use the express library
const express = require('express');

//import cookieParser
const cookieParser = require('cookie-parser');

// create a new server application
const app = express();

// Define the port we will listen on
// (it will attempt to read an environment global
// first, that is for when this is used on the real
// world wide web).
const port = process.env.PORT || 3000;

app.use(cookieParser());

// set the view engine to ejs
app.set('view engine', 'ejs');


// The main page of our website
//app.get('/', (req, res) => {
  //res.send('Hello World!')
//});

/*app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>An Example Title</title>
        <link rel="stylesheet" href="app.css">
      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>HTML is so much better than a plain string!</p>
      </body>
    </html>
  `);
});*/

/*app.get('/', (req, res) => {
  // reads the url parameter
  // http://domain/?name=text
  const name = req.query.name || "World";

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>An Example Title</title>
        <link rel="stylesheet" href="app.css">
      </head>
      <body>
        <h1>Hello, ${name}!</h1>
        <p>HTML is so much better than a plain string!</p>
      </body>
    </html>
  `);
});*/

//const {encode} = require('html-entities');

// ... snipped out code ...
/*
app.get('/', (req, res) => {
  // reads the url parameter
  // http://domain/?name=text
  const name = req.query.name || "World";

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>An Example Title</title>
        <link rel="stylesheet" href="app.css">
      </head>
      <body>
        <h1>Hello, ${encode(name)}!</h1>
        <p>HTML is so much better than a plain string!</p>
      </body>
    </html>
  `);
});

app.get('/', (req, res) => {
  res.render('welcome', {
    name: req.query.name || "World",
  });
});*/

//... code ...
let nextVisitorId = 1;
nextVisitorId += 1;

//let currentTime = Date.now().toString();


app.get('/', (req, res) => {
  let nVisitorId = req.cookies.visitorId ? nextVisitorId : ++nextVisitorId;
  res.cookie('visitorId', nVisitorId);
  res.cookie('visited', date_c =  Date.now().toString());
  if (req.cookies.visited) {
    req.cookies.visited = Math.floor((date_c - req.cookies.visited ) / 1000)
  } else {
    req.cookies.visited = null;
  }
  console.log(req.cookies);
  res.render('welcome', {
    name: req.query.name || "World",
    date: new Date().toLocaleString(),
    timeofLastVisit: req.cookies.visited,
    whoIsVisitor: nVisitorId,

  });  
});


// Start listening for network connections
app.listen(port);

// Printout for readability
console.log("Server Started!");