import { FindOptions } from "sequelize";
import { connection } from "../database/connection.ts";
import { Contract } from "../../types.ts";
import { ContractRepository } from "../repository/Contracts.repository.ts";

class ContractService {
  private repository;

  constructor() {
    connection.sync().then();

    this.repository = ContractRepository;
  }

  getInstance() {
    if (this.repository === undefined) {
      console.log(
        "The connection is undefined, please initalize the Contracts class before getting the instance",
      );

      return;
    }

    return this.repository;
  }

  async get(findOptions?: FindOptions) {
    return await this.repository.findAll({ ...findOptions, raw: true });
  }

  async create(contract: Contract) {
    const createResponse = await this.repository.create(contract);

    return createResponse;
  }

  async delete(id: string) {
    const deleteResponse = await this.repository.destroy({
      where: {
        id: id,
      },
    });

    return deleteResponse;
  }

  async update(contract: Partial<Contract>) {
    const findedObject = await this.repository.findOne({
      where: {
        id: contract.id,
      },
    });

    if (findedObject !== null) {
      const contractKeys = Object.keys(contract);
      type TContractKeys = keyof typeof contract;
      type TFindedObjectKeys = keyof typeof findedObject;

      contractKeys.forEach((field) => {
        findedObject[field as TFindedObjectKeys] =
          contract[field as TContractKeys];
      });
    }

    findedObject?.save();

    return findedObject;
  }
}

export default new ContractService() as ContractService;
