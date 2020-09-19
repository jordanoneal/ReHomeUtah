import { Router } from "express";
import passport from "passport";
import { IUserModel, User } from "../models/user";
// import { info } from "console";
// import { create } from "domain";
import { createLogin, Login } from "../models/login";

const router = Router();

// auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// callback route that will close the popup window and redirect parent window to "/" when user signs in
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.send(
      "<script>window.opener.postMessage('auth popup closed', '*');window.close();</script>"
    );
  }
);

// auth logout
router.get("/logout", function (req, res) {
  req.logout();
  // res.redirect("/login");
  res.send("logged out");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user: IUserModel/* , info */) => {
    if (err) {
      return next(err);
    }
    if (user) {
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect("/api/user");
      });
    } else {
      return res.sendStatus(401);
    }
  })(req, res, next);
});

router.post("/signup", async (req, res, next) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.sendStatus(409);
    } else {
      const user = new User({
        email: req.body.email,
      });
      await user.save();
      const login = new Login({
        provider: "local",
        password: req.body.password,
        user: user._id,
      });
      await createLogin(login);

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect("/api/user");
      });
    }
  } else {
    res.sendStatus(400);
  }
});

export default router;
