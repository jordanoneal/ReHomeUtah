import * as express from "express";
import { SellerDetails } from "../models/sellerDetails";


export default {
    create: async (req: express.Request, res: express.Response ) => {
        const data= await SellerDetails.create(req.body)
        res.json(data);
    }
}