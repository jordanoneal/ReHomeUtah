import passport from "passport";
import { Login } from "../models/login";
import { User } from "../models/user";
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
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      console.log("passport callback function fired");
      console.log(profile);
      const user = await User.findOne({
        email: profile.email,
      });
      // done(null, profile);
      new Login({
        provider: profile.provider,
        providerUserId: profile.id,
      });
      new User({
        email: profile.email,
        firstName: profile.given_name,
        lastName: profile.family_name,
      });
    }
  )
);
