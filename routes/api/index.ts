import servicesRouter from "./services";
import sellerDetailsRouter from "./sellerDetails";

import express from "express";

const router = express.Router();

router.use("/services", servicesRouter);
router.use("/sellerdetails", sellerDetailsRouter)

export default router;