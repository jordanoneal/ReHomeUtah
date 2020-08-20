import express from "express";
import sellerDetailsController from "../../controllers/sellerDetailsController";
const router = express.Router();

router.route("/").post(sellerDetailsController.create);

export default router;