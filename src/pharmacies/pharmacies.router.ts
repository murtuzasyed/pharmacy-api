import express, { Request, Response } from "express";
import * as PharmacyService from "./pharmacies.service";

export const pharmaciesRouter = express.Router();

// Route to get the nearest pharmacy based on the provided coordiantes.
pharmaciesRouter.get(
  "/coordinates/:coordinates/",
  async (req: Request, res: Response) => {
    try {
      const params = req.params;
      const coordinates = params.coordinates.split(",");
      const latitude = parseFloat(coordinates[0]);
      const longitude = parseFloat(coordinates[1]);

      const pharmacy: object = await PharmacyService.findNearestPharmacy({
        latitude,
        longitude
      });
      res.status(200).send(pharmacy);
    } catch (e) {
      res.status(404).send(e.message);
    }
  }
);
