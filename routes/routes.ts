const router = require("express").Router();
import passport from "passport";

// auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// // callback route for google to redirect to
// router.get("/google/callback", passport.authenticate("google"), (req: any, res: any) => {
//     res.send("you reached the callback URI")
// })

// callback route that will close the popup window
// parent window will redirect to "/" when user successfully signs in
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req: any, res: any) {
    res.send("<script>window.close()</script>");
  }
);

module.exports = router;
