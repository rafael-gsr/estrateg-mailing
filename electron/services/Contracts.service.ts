import { FindOptions, Op } from "sequelize";
import { connection } from "../database/connection.ts";
import { Contract } from "../../types.ts";
import { ContractRepository } from "../repository/Contracts.repository.ts";
import { Status } from "../state/State.ts";

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

  async getOne(findOptions?: FindOptions) {
    return await this.repository.findOne({ ...findOptions });
  }

  async getOverdued() {
    const now = new Date();

    return await this.repository.findAll({
      where: {
        dueDate: { [Op.lte]: now.getTime() },
      },
      raw: true,
    });
  }

  async getOverdueThisWeek() {
    const today = new Date();
    const todayDate = today.getDate();
    const minimal = today.setDate(todayDate - 4);
    const maximal = today.setDate(todayDate + 4);

    return await this.repository.findAll({
      where: {
        dueDate: {
          [Op.lte]: maximal,
          [Op.gte]: minimal,
        },
      },
      raw: true,
    });
  }

  async create(contract: Contract) {
    const createResponse = await this.repository.create({
      ...contract,
      status: Status.REGULAR,
    });
    return createResponse;
  }

  async delete(id: string) {
    return await this.repository.destroy({
      where: {
        id: id,
      },
    });
  }

  async update(contract: Partial<Contract>) {
    const findedObject = await this.repository.findOne({
      where: {
        id: contract.id,
      },
    });

    if (findedObject === null)
      throw new Error(`No object found with id: ${contract.id} `);

    const fields = Object.keys(contract);
    type TContractKeys = keyof typeof contract;
    type TFindedObjectKeys = keyof typeof findedObject;

    fields.forEach((field) => {
      findedObject[field as TFindedObjectKeys] =
        contract[field as TContractKeys];
    });

    findedObject?.save();

    return findedObject;
  }
}

export default new ContractService() as ContractService;
