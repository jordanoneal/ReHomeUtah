// let passport = require("passport");
import passport from "passport";
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require("./keys");

passport.use(new GoogleStrategy({
    // options for the google strat
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "/auth/google/callback"
  },
  // passport callback function
  ((function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }))
));