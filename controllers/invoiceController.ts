import * as express from "express";
import { IInvoice } from "../interfaces/invoice";
import { IInvoiceModel, Invoice } from "../models/invoice";

export default {
    findAll: async function ( req: express.Request, res: express.Response ) {
        const allInvoices = await Invoice.find({});
        console.log(allInvoices);
        res.json(allInvoices);
    },
    findById: async function ( req: express.Request, res: express.Response ) {
        await Invoice.findById(req.params.id)
            .then( IInvoiceModel => res.json(IInvoiceModel))
            .catch(( err: Error) => res.status(422).json(err));
    },
    create: async function ( req: express.Request, res: express.Response ) {
        await Invoice
            .create(req.body)
            .then(IInvoiceModel => express.response.json(IInvoiceModel))
            .catch(err => res.status(422).json(err));
    },
    update: async function ( req: express.Request, res: express.Response ) {
        //     console.log(req.body);
        await Invoice
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(IInvoiceModel => res.json(IInvoiceModel))
            .catch(err => res.status(422).json(err));
    },
    remove: async function(req: express.Request, res: express.Response) {
        await Invoice
            .findById({ _id: req.params.id })
            .then(IInvoiceModel => IInvoiceModel?.remove())
            .then(IInvoiceModel => res.json(IInvoiceModel))
            .catch(err => res.status(422).json(err));
    }
}
