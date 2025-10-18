import { Model } from "sequelize";
import { connection } from "../database/connection.ts";
import { contractModel } from "../database/Contracts.model.ts";

export class ContractRepository extends Model {}

ContractRepository.init(contractModel, {
  sequelize: connection,
  modelName: "Contract",
});
