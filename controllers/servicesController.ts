// import * as express from "express";
// import IServicesModel from "../interfaces/servicesController.ts";

// class ServicesController {
//     public path = "/services";
//     public router = express.Router();

//     // Is this the correct way to use the Services Model & Interface and declare the Services type?
//     // Is there a type of model or a type of schema or something like that?
//     private services: typeof Services[] = [
//         {
//             service: "MLS Listing",
//             explanation: "Your home will show up on over 100 listing websites (including Zillow, Trulia and Redfin).",
//             pricing: {
//                 Included: {
//                     description: "This service is included in the base price of two percent (2%) of the sale of the home.",
//                     price: "(Included in 2% Base Price)"
//                 }
//             }
//         }
//     ];

//     constructor() {
//         this.initializeRoutes();
//     }

//     public initializeRoutes() {
//         this.router.get(this.path, this.getAllServices);
//         this.router.get(this.path, this.createAService);

//         getAllServices = (request: express.Request, response: express.Response) => {
//             response.send(this.services);
//         }

//         createAService = (request: express.Request, response: express.Response) => {
//             const service: Services = request.body;
//             this.services.push(service);
//             response.send(service);
//         }
//     }
// }

// export default ServicesController;

// =================================================

const db = require("../models");

module.exports = {
    findAllServices: useCallBack(async (req: unknown, res: unknown) => {
        await Services
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json)
    }),
    findById: useCallBack(async (req: { params: { id: number } }, res: { }) => {
        await Services 
            findById(req.params.id)
            .then(dbModel: [ Document ] => res.json(dbModel))
    }
}