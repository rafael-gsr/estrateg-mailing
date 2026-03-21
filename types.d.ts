import { FindOptions } from "sequelize";

type ElectronMethods = {
  logData: () => void;
  logInvoke: () => Promise;

  createContract: (contract: Contract) => Promise<any>;
  updateContract: (newContract: Contract) => Promise<any>;
  getContracts: (options?: FindOptions) => Promise<any>;
  deleteContract: (id: string) => Promise<any>;
  getOverduedContracts: () => Promise<Array<Contract>>;
  getOverdueThisWeek: () => Promise<Array<Contract>>;
  nextState: (id: string) => Promise<Contract>;
};

type Contract = {
  id?: string;
  companyName: string;
  activity: string;
  email: string;
  phone: string;
  dueDate: number;
  status: string;
  lastContact: string;
  observations?: string;
  createdAt?: string;
  updatedAt?: string;
};

type ElectronMethodsKeys = keyof ElectronMethods;

declare global {
  interface Window {
    api: ElectronMethods;
  }
}
