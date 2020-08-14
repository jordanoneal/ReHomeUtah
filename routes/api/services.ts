import servicesController from "../../controllers/servicesController";
import express from "express";
const router = express.Router();

// public path = "/services";

router.route("/").get(servicesController.findAll);
router.route("/:id").get(servicesController.findById);

export default router;

// const services: IServices[] = [
//     {
//         service: "MLS Listing",
//         explanation: "Your home will show up on over 100 listing websites (including Zillow, Trulia and Redfin).",
//         pricing: {
//             Included: {
//                 description: "This service is included in the base price of two percent (2%) of the sale of the home.",
//                 price: "(Included in 2% Base Price)"
//             }
//         }
//     }
// ];

// router.get("/services", (request: express.Request, response: express.Response) => {
//     response.send(services);
// });
// router.post("/services", (request: express.Request, response: express.Response) => {
//     const service: IServices = request.body;
//     services.push(service);
//     response.send(service);
// });