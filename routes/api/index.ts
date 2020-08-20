import servicesRouter from "./services";
import invoiceRouter from "./invoice";
import sellerDetailsRouter from "./sellerDetails";

import express from "express";

const router = express.Router();

router.use("/services", servicesRouter);
router.use("/invoices", invoiceRouter);
router.use("/sellerdetails", sellerDetailsRouter);

export default router;
