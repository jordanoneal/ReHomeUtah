import servicesRouter from "./services";
import express from "express";

const router = express.Router();

router.use("/services", servicesRouter);

export default router;
