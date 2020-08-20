import passport from "passport";
import { Login } from "../models/login";
import { User, IUserModel } from "../models/user";
import { Schema } from "mongoose";

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
// const keys = require("./keys");

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
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `/auth/google/callback`,
      proxy: true,
    },
    // passport callback function
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      console.log("passport callback function fired");
      // console.log(profile);
      try {
        // check if user already exists in our db
        console.log("finding user");
        let user = await User.findOne({
          email: profile.emails[0].value,
        });
        // if not, create user in our db
        if (!user) {
          console.log("creating user");
          user = new User({
            email: profile.emails[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
          });
          console.log("saving user");
          await user.save();
          // log the created user
          console.log(user);
        }
        console.log("finding login");
        let login = await Login.findOne({
          providerUserId: profile.id,
          provider: profile.provider,
        });
        if (login) {
          console.log(login.user);
        } else {
          console.log("creating login");
          login = new Login({
            provider: profile.provider,
            providerUserId: profile.id,
            user: user._id,
          });
          console.log("saving login");
          await login.save();
          // log login
          console.log(login);
        }
        console.log("done");
        done(null, user);
      } catch (error) {
        console.log(error);
        done(error);
      }
    }
  )
);
