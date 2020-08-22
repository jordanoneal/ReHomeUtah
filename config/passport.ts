import passport from "passport";
import { Login } from "../models/login";
import { User, IUserModel } from "../models/user";
import { Schema } from "mongoose";
import {OAuth2Strategy as GoogleStrategy} from 'passport-google-oauth';

// needed to fix proxy not being in the interface for whatever reason.
declare module "passport-google-oauth" {
  interface IOAuth2StrategyOption {
      proxy?: boolean;
  }
}

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
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: `/auth/google/callback`,
      proxy: true,
    },
    // passport callback function
    async (accessToken, refreshToken, profile, done) => {
      // console.log(profile);
      try {
        // check if user already exists in our db
        let user = await User.findOne({
          email: profile.emails ? profile.emails[0].value : "",
        });
        // if not, create user in our db
        if (!user) {
          user = new User({
            email: profile.emails ? profile.emails[0].value : "",
            firstName: profile.name?.givenName || "",
            lastName: profile.name?.familyName || "",
          });
          await user.save();
        }
        let login = await Login.findOne({
          providerUserId: profile.id,
          provider: profile.provider,
        });
        if (!login) {
          login = new Login({
            provider: profile.provider,
            providerUserId: profile.id,
            user: user._id,
          });
          await login.save();
        }
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
