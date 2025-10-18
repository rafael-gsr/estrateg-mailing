import { FindOptions, Op } from "sequelize";
import { Contract } from "../../types.ts";
import ContractService from "../services/Contracts.service.ts";

export class ContractController {
  protected service = ContractService;

  async get(findOptions?: FindOptions) {
    return await this.service.get(findOptions);
  }

  async getOverduedContracts() {
    const response = await this.service.get({
      where: {
        dueDate: { [Op.lt]: new Date().getTime() },
      },
    });

    return response;
  }

  async getOverdueThisWeek() {
    const today = new Date();
    const todayDate = today.getDate();
    const minimal = today.setDate(todayDate - 4);
    const maximal = today.setDate(todayDate + 4);

    const response = await this.service.get({
      where: {
        dueDate: {
          [Op.lte]: maximal,
          [Op.gte]: minimal,
        },
      },
    });

    return response;
  }

  async create(contract: Contract) {
    return await this.service.create({
      ...contract,
      status: "",
      lastContact: new Date().toISOString(),
    });
  }

  async update(contract: Partial<Contract>) {
    return await this.service.update(contract);
  }

  async remove(id: string) {
    return await this.service.delete(id);
  }

  async updateDatabase() {}
}
