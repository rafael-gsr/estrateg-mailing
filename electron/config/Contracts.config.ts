import { IpcMainInvokeEvent } from "electron";
import { onHandle } from "../utils.ts";
import { FindOptions } from "sequelize";
import { ContractController } from "../controllers/Contracts.controller.ts";
import { Contract } from "../../types";

export class ContractHandlerConfig {
  protected controller: ContractController;

  constructor() {
    this.controller = new ContractController();
    return this;
  }

  createContract() {
    onHandle(
      "createContract",
      async (event: IpcMainInvokeEvent, contract: Contract) => {
        console.log("create event: ", event);
        const responsePromise = await this.controller.create(contract);
        return responsePromise;
      },
    );
  }

  getContracts() {
    onHandle(
      "getContracts",
      async (event: IpcMainInvokeEvent, options?: FindOptions) => {
        console.log("get event: ", event);
        const responsePromise = await this.controller.get(options);
        return responsePromise;
      },
    );
  }

  getOverduedContracts() {
    onHandle("getOverduedContracts", async () => {
      const response = await this.controller.getOverduedContracts();
      return response;
    });
  }

  getOverdueThisWeek() {
    onHandle("getOverdueThisWeek", async () => {
      const response = await this.controller.getOverdueThisWeek();
      return response;
    });
  }

  updateContract() {
    onHandle(
      "updateContract",
      async (event: IpcMainInvokeEvent, contract: Partial<Contract>) => {
        console.log("update event: ", event);
        const responsePromise = await this.controller.update(contract);
        return responsePromise;
      },
    );
  }

  deleteContract() {
    onHandle(
      "deleteContract",
      async (event: IpcMainInvokeEvent, id: string) => {
        console.log("delete event: ", event);
        const responsePromise = await this.controller.remove(id);
        return responsePromise;
      },
    );
  }

  updateDatabase() {
    onHandle("updateDatabase", async (event: IpcMainInvokeEvent) => {
      console.log("update database", event);
      return "ok";
    });
  }

  defineContractsHandler() {
    this.getOverduedContracts();
    this.createContract();
    this.defineContractsHandler();
    this.deleteContract();
    this.getContracts();
    this.getOverdueThisWeek();
    this.updateContract();
    this.deleteContract();
  }
}
