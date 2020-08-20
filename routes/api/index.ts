import servicesRouter from "./services";
import invoiceRouter from "./invoice";
import express from "express";

const router = express.Router();

router.use("/services", servicesRouter);
router.use("/invoices", invoiceRouter);

export default router;
