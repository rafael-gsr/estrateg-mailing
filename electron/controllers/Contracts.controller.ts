import { FindOptions } from "sequelize";
import { Contract } from "../../types.ts";
import ContractService from "../services/Contracts.service.ts";
import { StateFactory } from "../state/State.ts";

export class ContractController {
  protected service = new ContractService();

  async get(findOptions?: FindOptions) {
    return await this.service.get(findOptions);
  }

  async getOverduedContracts() {
    return await this.service.getOverdued();
  }

  async getOverdueThisWeek() {
    return await this.service.getOverdueThisWeek();
  }

  async create(contract: Contract) {
    return await this.service.create({
      ...contract,
      lastContact: new Date().toISOString(),
    });
  }

  async update(contract: Partial<Contract>) {
    return await this.service.update(contract);
  }

  async remove(id: string) {
    return await this.service.delete(id);
  }

  async updateDatabase() {
    throw new Error("You cannot do it");
  }

  async nextState(id: string) {
    const itemToUpdate = await this.service.getOne({ where: { id } });

    const stateTransition = StateFactory(itemToUpdate?.dataValues);

    const newContractState = stateTransition.goToNextState();

    this.service.update(newContractState);

    console.log("state contract", newContractState);
  }

  async prevState(id: string) {
    const itemToUpdate = await this.service.getOne({ where: { id } });

    const stateTransition = StateFactory(itemToUpdate?.dataValues);

    const newContractState = stateTransition.goToNextState();

    this.service.update(newContractState);

    console.log("state contract", newContractState);
  }
}
