import * as express from "express";
import { IServices } from "../interfaces/services";


// public path = "/services";
const router = express.Router();

const services: IServices[] = [
    {
        service: "MLS Listing",
        explanation: "Your home will show up on over 100 listing websites (including Zillow, Trulia and Redfin).",
        pricing: {
            Included: {
                description: "This service is included in the base price of two percent (2%) of the sale of the home.",
                price: "(Included in 2% Base Price)"
            }
        }
    }
];

router.get("/services", (request: express.Request, response: express.Response) => {
    response.send(services);
});
router.post("/services", (request: express.Request, response: express.Response) => {
    const service: IServices = request.body;
    services.push(service);
    response.send(service);
});

export default router;