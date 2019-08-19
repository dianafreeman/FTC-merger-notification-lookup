import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import '@babel/polyfill';
import fetch from 'node-fetch';
import open from 'open';

dotenv.config();
const app = express();

// Serve the static files from dist folder
app.use(express.static(path.join(__dirname, 'dist/')));

// Parse JSON
app.use(bodyParser.json());

// Disable listening in test mode
if (process.env.NODE_ENV === 'testing') {
  console.warn('Listening not enabled in test mode.');
} else {
  if (process.env.NODE_ENV === 'auto') open(`http://localhost:${process.env.PORT}`);
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT} in MODE ${process.env.NODE_ENV}`);
  });
}


// GET /data Route
app.get('/data', (req, res) => {
  const URL = `https://api.ftc.gov/v0/hsr-early-termination-notices?api_key=${process.env.GOV_API_KEY}`;
  fetch(URL)
    .then(resp => resp.json())
    .then(body => res.send(body));
});

// GET /data Route
app.get('/search/:term', (req, res) => {
  const { term } = req.params;
  const URL = `https://api.ftc.gov/v0/hsr-early-termination-notices?api_key=${process.env.GOV_API_KEY}&keywords=${term}`;
  fetch(URL)
    .then(resp => resp.json())
    .then(body => res.send(body));
});


module.exports = app;