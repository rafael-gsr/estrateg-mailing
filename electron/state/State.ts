import { Contract } from "../../types.ts";
import { ContractRepository } from "../repository/Contracts.repository.ts";
import ContractsService from "../services/Contracts.service.ts";

export enum Status {
  REGULAR = "regular",
  AROUSE_INTEREST = "arouseInterest",
  FIRST_FOLLOW_UP = "firstFollowUp",
  SECOND_FOLLOW_UP = "secondFollowUp",
  BREAKUP = "breakup",
  BREACHED = "breached",
}

abstract class State {
  abstract contract: Contract;

  abstract service: typeof ContractsService;

  abstract goToNextState(): Promise<ContractRepository | null>;

  async delete(): Promise<ContractRepository | null> {
    if (!this.contract.id) throw new Error("Id not found");

    const item = await this.service.getOne({ where: { id: this.contract.id } });
    item?.destroy();

    return item;
  }

  async renew(): Promise<ContractRepository | null> {
    if (!this.contract.id) throw new Error("Id not found");

    const item = await this.service.getOne({ where: { id: this.contract.id } });

    item?.set({
      status: Status.AROUSE_INTEREST,
    });

    return item;
  }

  async breach(): Promise<ContractRepository | null> {
    if (!this.contract.id) throw new Error("Id not found");

    const item = await this.service.getOne({ where: { id: this.contract.id } });

    item?.set({
      status: Status.BREACHED,
    });

    return item;
  }
}

class Regular extends State {
  service;
  contract;

  constructor(contract: Contract) {
    super();
    this.service = ContractsService;
    this.contract = contract;
  }

  async goToNextState(): Promise<ContractRepository | null> {
    if (!this.contract.id) throw new Error("Id not found");

    const item = await this.service.getOne({ where: { id: this.contract.id } });

    item?.set({
      status: Status.AROUSE_INTEREST,
      lastContact: new Date().getTime(),
    });

    return item;
  }
}

class ArouseInterest extends State {
  service;
  contract;

  constructor(contract: Contract) {
    super();
    this.service = ContractsService;
    this.contract = contract;
  }

  async goToNextState(): Promise<ContractRepository | null> {
    if (!this.contract.id) throw new Error("Id not found");

    const item = await this.service.getOne({ where: { id: this.contract.id } });

    item?.set({
      status: Status.FIRST_FOLLOW_UP,
      lastContact: new Date().getTime(),
    });

    return item;
  }
}

class FirstFollowUp extends State {
  service;
  contract;

  constructor(contract: Contract) {
    super();
    this.service = ContractsService;
    this.contract = contract;
  }

  async goToNextState(): Promise<ContractRepository | null> {
    if (!this.contract.id) throw new Error("Id not found");

    const item = await this.service.getOne({ where: { id: this.contract.id } });

    item?.set({
      status: Status.SECOND_FOLLOW_UP,
      lastContact: new Date().getTime(),
    });

    return item;
  }
}

class SecondFollowUp extends State {
  service;
  contract;

  constructor(contract: Contract) {
    super();
    this.service = ContractsService;
    this.contract = contract;
  }

  async goToNextState(): Promise<ContractRepository | null> {
    if (!this.contract.id) throw new Error("Id not found");

    const item = await this.service.getOne({ where: { id: this.contract.id } });

    item?.set({
      status: Status.BREAKUP,
      lastContact: new Date().getTime(),
    });

    return item;
  }
}

class Breakup extends State {
  contract;
  service;

  constructor(contract: Contract) {
    super();
    this.service = ContractsService;
    this.contract = contract;
  }

  async goToNextState(): Promise<ContractRepository | null> {
    throw new Error("The state Breakup don`t have next state.");
  }
}

export class StateFactory {
  state: State;

  constructor(contract: Contract) {
    switch (contract.status) {
      case Status.REGULAR:
        this.state = new Regular(contract);
        return;
      case Status.AROUSE_INTEREST:
        this.state = new ArouseInterest(contract);

        return;
      case Status.BREAKUP:
        this.state = new Breakup(contract);
        return;

      case Status.FIRST_FOLLOW_UP:
        this.state = new FirstFollowUp(contract);
        return;

      case Status.SECOND_FOLLOW_UP:
        this.state = new SecondFollowUp(contract);
        return;

      default:
        this.state = new Regular(contract);
    }
  }

  get() {
    return this.state;
  }
}
