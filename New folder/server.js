const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');
console.log('hello');
// const dotenv = require('dotenv');

// if (process.env.NODE_ENV !== 'production') dotenv.config({ path: "./config.env" });

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
  // app.use(express.static("client/build"));

  // // Express will serve up index.html if route isn't recognized
  // const path = require("path");
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}

app.listen(PORT, error => {
  if (error) throw error;
  console.log('Server running on port ' + PORT);
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

// app.post('/payment', (req, res) => {
//   const body = {
//     source: req.body.token.id,
//     amount: req.body.amount,
//     currency: 'usd'
//   };

//   stripe.charges.create(body, (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).send({ error: stripeErr });
//     } else {
//       res.status(200).send({ success: stripeRes });
//     }
//   });
// });

// [END gae_flex_node_static_files]
module.exports = app;
