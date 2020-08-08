import passport from "passport";
import { Login } from "../models/login";
import { User, IUserModel } from "../models/user";
import { Schema } from "mongoose";
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("./keys");

passport.serializeUser(function (user: IUserModel, done) {
  done(null, user._id);
});

passport.deserializeUser(async function (userId: Schema.Types.ObjectId, done) {
  const user = await User.findById(userId);
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
      try {
        console.log('finding user');
        let user = await User.findOne({
          email: profile.emails[0].value,
        })
        if (!user) {
          console.log('creating user');
          user = new User({
            email: profile.emails[0].value,
            firstName: profile.given_name,
            lastName: profile.family_name,
          });
          console.log('saving user');
          await user.save();
        }
        console.log('finding login');
        let login = await Login.findOne({
          providerUserId: profile.id,
          provider: profile.provider,
        });
        if (login) {
          console.log(login.user);
        } else {
          console.log('creating login');
          login = new Login({
            provider: profile.provider,
            providerUserId: profile.id,
            user: user._id
          });
          console.log('saving login');
          await login.save();
        }
        console.log('done');
        done(null, user);
      } catch (error) {
        console.log(error);
        done(error)
      }
    }
  )
);
