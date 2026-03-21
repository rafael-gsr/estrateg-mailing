import { Model } from "sequelize";
import { connection } from "../database/connection.ts";
import { ContractEntity } from "../entities/Contract.ts";

export class ContractRepository extends Model {}

ContractRepository.init(ContractEntity, {
  sequelize: connection,
  modelName: "Contract",
});
