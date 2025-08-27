import { connection } from "./connection.ts";
import { Contract } from "./model.ts";

export const database = connection.define("Contract", Contract);
