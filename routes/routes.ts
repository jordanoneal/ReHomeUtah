const router = require("express").Router();
import passport from "passport";

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
  function (req: any, res: any) {
    res.send("<script>window.close()</script>");
  }
);

// auth logout
router.get("/logout", function (req: any, res: any) {
  req.logout();
  // res.redirect("/login");
  res.send("logged out")
});

module.exports = router;
