import invoiceController from "../../controllers/invoiceController";
import express from "express";
const router = express.Router();

// public path = "/invoices";

router.route("/")
    .get(invoiceController.findAll)
    .post(invoiceController.create);

router.route("/:id")
    .get(invoiceController.findById)
    .put(invoiceController.update)
    .delete(invoiceController.remove);

export default router;