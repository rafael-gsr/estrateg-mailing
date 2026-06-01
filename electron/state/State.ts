import { Contract } from "../../types.ts";
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

  abstract goToNextState(): Contract;

  abstract goToPrevState(): Contract;

  renew(): Contract {
    this.contract.status = Status.REGULAR;
    return this.contract;
  }

  breach(): Contract {
    this.contract.status = Status.BREACHED;
    return this.contract;
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

  goToNextState(): Contract {
    this.contract.status = Status.AROUSE_INTEREST;
    this.contract.lastContact = new Date().getTime();

    return this.contract;
  }

  goToPrevState(): Contract {
    return this.contract;
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

  goToNextState(): Contract {
    this.contract.status = Status.FIRST_FOLLOW_UP;
    this.contract.lastContact = new Date().getTime();
    return this.contract;
  }

  goToPrevState(): Contract {
    this.contract.status = Status.REGULAR;
    this.contract.lastContact = new Date().getTime();
    return this.contract;
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

  goToNextState(): Contract {
    this.contract.status = Status.SECOND_FOLLOW_UP;
    this.contract.lastContact = new Date().getTime();

    return this.contract;
  }

  goToPrevState(): Contract {
    this.contract.status = Status.AROUSE_INTEREST;
    this.contract.lastContact = new Date().getTime();
    return this.contract;
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

  goToNextState(): Contract {
    this.contract.status = Status.BREAKUP;
    this.contract.lastContact = new Date().getTime();

    return this.contract;
  }

  goToPrevState(): Contract {
    this.contract.status = Status.FIRST_FOLLOW_UP;
    this.contract.lastContact = new Date().getTime();
    return this.contract;
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

  goToNextState(): Contract {
    return this.contract;
  }

  goToPrevState(): Contract {
    this.contract.status = Status.SECOND_FOLLOW_UP;
    return this.contract;
  }
}

export function StateFactory(contract: Contract): State {
  switch (contract.status) {
    case Status.REGULAR:
      return new Regular(contract);

    case Status.AROUSE_INTEREST:
      return new ArouseInterest(contract);

    case Status.BREAKUP:
      return new Breakup(contract);

    case Status.FIRST_FOLLOW_UP:
      return new FirstFollowUp(contract);

    case Status.SECOND_FOLLOW_UP:
      return new SecondFollowUp(contract);

    default:
      return new Regular(contract);
  }
}
