import * as express from "express";
import { Services } from "../models/services";

export default {
    findAll: async function ( req: express.Request, res: express.Response ) {
        const allServices = await Services.find({});
        res.json(allServices);
    },
    findById: async function ( req: express.Request, res: express.Response ) {
        await Services.findById(req.params.id)
            .then( IServicesModel => res.json(IServicesModel))
            .catch(( err: Error) => res.status(422).json(err));
    },
    create: async function ( req: express.Request, res: express.Response ) {
        await Services
            .create(req.body)
            // is Services equivalent of dbModel?
            .then(IServicesModel => express.response.json(IServicesModel))
            .catch(err => res.status(422).json(err));
    },
    update: async function ( req: express.Request, res: express.Response ) {
        await Services
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(IServicesModel => res.json(IServicesModel))
            .catch(err => res.status(422).json(err));
    },
    remove: async function(req: express.Request, res: express.Response) {
        await Services
            .findById({ _id: req.params.id })
            .then(IServicesModel => IServicesModel?.remove())
            .then(IServicesModel => res.json(IServicesModel))
            .catch(err => res.status(422).json(err));
    }
}
