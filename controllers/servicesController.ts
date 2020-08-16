import * as express from "express";
import { IServices } from "../interfaces/services";
import { Services } from "../models/services";

export default {
  findAll: async function (req: express.Request, res: express.Response) {
    const allServices = await Services.find({});
    console.log(allServices);
    res.json(allServices);
  },
  findById: function (req: express.Request, res: express.Response) {
    Services.findById(req.params.id)
      .then((dbService) => res.json(dbService))
      .catch((err: Error) => res.status(422).json(err));
  },
  // create: function ( req: express.Request, res: express.Response ) {
  //     // Am I here creating an array of services or individual service objects?
  //     const { service, explanation, pricing: {

  //     }} = req.body;
  //     const newServices = new Services;
  // },
  // update: async function ( req: express.Request, res: express.Response ) {
  //     console.log(req.body);
  //     const service = await db.Services.findById(req.params.id);

  // },
  // delete:
};
