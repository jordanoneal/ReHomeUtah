import { User } from "../models/user";

const router = require("express").Router();

router.post("/saveuser", async (req: any, res: any) => {
  const data = await User.findByIdAndUpdate(req.body._id, req.body);
  console.log(`body:`, req.body);
  res.json({
    msg: "received data",
  });
});

// get user data
router.get("/user", (req: any, res: any) => {
  console.log("getting user data");
  console.log(req.user);
  res.send(req.user);
});

module.exports = router;
