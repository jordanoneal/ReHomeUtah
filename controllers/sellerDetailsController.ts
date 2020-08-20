import * as express from "express";
import { Seller } from "../models/sellerDetails";


export default {
    create: async (req: express.Request, res: express.Response ) => {
        const data= await Seller.create(req.body)
        res.json(data);
    }
}