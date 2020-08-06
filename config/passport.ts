import passport from "passport";
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("./keys");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      // options for the google strat
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    // passport callback function
    (accessToken: any, refreshToken: any, profile: any, done: any) => {
      console.log("passport callback function fired");
      console.log(profile);
      done(null, profile);
    }
  )
);
