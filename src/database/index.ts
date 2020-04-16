const path = require("path");
const csv = require("csvtojson");
import { Pharmacy } from "../pharmacies/pharmacy.interface";
export const getData = async (): Promise<Array<Pharmacy>> => {
  return csv().fromFile(path.join(process.cwd(), "static", "pharmacies.csv"));
};
