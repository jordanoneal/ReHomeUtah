import express from "express";
import path from "path";
import passport from "passport";
import mongoose from "mongoose";

const authRoutes = require("./routes/routes");
const apiRoutes = require("./routes/apiRoutes");
// associate google strategy wih passport object
const passportSetup = require("./config/passport");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rehomeutah", {
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;
const db = mongoose.connection
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db })
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

// setup routes
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
console.log("different")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
