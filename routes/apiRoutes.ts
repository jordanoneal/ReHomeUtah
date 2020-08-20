import { User } from "../models/user";
import { Seller, SellerSchema } from "../models/sellerDetails";

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

// post route for sellers details
router.post("/savesellersdetails", async (req: any, res: any) => {
  const data = await Seller.create(req.body);
  // const data = await Seller.findByIdAndUpdate(req.body._id, req.body);
  console.log("sellers body:", req.body);
  if (data) {
    res.json({
      msg: "recieved sellers details",
    });
  }
});

// get sellers details
// router.get("/sellersdetails", async (req: any, res: any) => {
//   console.log("getting sellers data");
//   res.send(req.body)
// })

router.get("/sellersdetails", async (req: any, res: any) => {
  Seller.find({}, (error, data) => {
    console.log("getting sellers details:", data);
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;