const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
// const passport = require('passport');
// const keys = require('./config/keys');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
const { log } = console;
const cors = require("cors");
const enforce = require("express-sslify");

console.log('the initial NODE ENV IS : ', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') dotenv.config({ path: './config.env' });

// require('./models/User');
// require('./models/Survey');
// require('./services/passport');

// //Database connect -->
// mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {console.log("successfully connected to MongoDB ATLAS")});
// // <-- Database connect

// data parsing -->
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// 
app.use(cors());
app.set("trust proxy", true);
// <-- data parsing

// //Cookie session -->
// app.use(
//     cookieSession({
//         maxAge: 60 * 60 * 24 * 1000,
//         keys: [keys.cookieKey]
//     })
//     );
// app.use(passport.initialize());
// app.use(passport.session());
// <-- cookie session

//Routing -->
// require('./routes/authRoutes')(app);
// require('./routes/billingRoutes')(app);
// require('./routes/surveyRoutes')(app);
// <-- Routing 
// if (1>0) {
if (process.env.NODE_ENV === 'production') {

  console.log("WOW! I am in production :D ");
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  
}

app.use(express.static(path.join(__dirname, "client", "build")));
// Express will serve up production assets and files like main.js & main.css

app.get("/firebase-messaging-sw.js", (req, res) => {
  res.sendFile(
    path.join(__dirname, "client", "build", "firebase-messaging-sw.js")
  );
});
// Express will serve up index.html if route isn't recognized
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// app.configure("production", () => {
//     // Express will serve up production assets and files like main.js & main.css
//     app.use(express.static('client/build'));

//     // Express will serve up index.html if route isn't recognized
//     const path = require('path');
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// });

//setup port -->
const port = process.env.PORT || 6070;
// app.listen(PORT);
const server = app.listen(port, (error) => {
  if (error) throw error;
  log(`Express server started running on port ${port}...`);
});
// <-- setup port

// Simple one-liner server run:
// Const http = require('http);
// http.createServer(appFunction).listen(3000);

process.on('unhandledRejection', err => {
  log('UNHANDLED REJECTION! 💥 Shutting down...');
  log(err.name, err.message);
  server.close(() => { // close the server right now.
    process.exit(1); // manually shutdown the application.
  });
});

process.on('SIGTERM', () => {
  log('SIGTERM RECEIVED 👋 Shutting down gracefully...');
  server.close(() => { // Allows all the pending request to get processed completely before shutdown.
    log('Process Terminated! 😢');
  });
});
