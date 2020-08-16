import apiRouter from "./api";
import express from "express";

const router = express.Router();

router.use("/api", apiRouter);

export default router;
