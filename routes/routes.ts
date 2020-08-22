import {Router} from 'express';
import passport from "passport";
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

export default router;
