import { ReactElement } from "react";

import { Status } from "../../constants/Status";

export type ModalProps = {
  close: () => void;
};

export type IModalComponent = (props: ModalProps) => ReactElement;

export interface ModalData {
  id?: string;
  companyName?: string;
  activity?: string;
  email?: string;
  phone?: string;
  dueDate?: number;
  observations?: string;
  status?: Status;
  lastContact?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
