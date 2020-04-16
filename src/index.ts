import express from "express";
import * as dotenv from "dotenv";
import { pharmaciesRouter } from "./pharmacies/pharmacies.router";

// load environment variables from .env file
dotenv.config();
// if PORT mentioned in the .env file is loaded then continue else exit out of the application. 
if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// parse request as json payloads
app.use(express.json());
app.use("/pharmacies", pharmaciesRouter);
/**
 * Server Activation
 */
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})