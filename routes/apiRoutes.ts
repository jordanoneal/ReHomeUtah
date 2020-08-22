import { Seller } from "../models/sellerDetails";
import {Router} from 'express';

const router = Router();

// router.post("/saveuser", async (req, res) => {
//   const data = await User.findByIdAndUpdate(req.body._id, req.body);
//   console.log(`body:`, req.body);
//   res.json({
//     msg: "received data",
//   });
// });

// get user data
router.get("/user", (req, res) => {
  res.send(req.user);
});

// post route for sellers details
router.post("/savesellersdetails", async (req, res) => {
  const data = await Seller.create(req.body);
  // const data = await Seller.findByIdAndUpdate(req.body._id, req.body);
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

router.get("/sellersdetails", async (req, res) => {
  Seller.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

export default router;