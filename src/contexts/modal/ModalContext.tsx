import { ReactElement } from "react";
import { create } from "zustand";

import Create from "src/modals/Create/Create";
import Edit from "src/modals/Edit/Edit";
import Delete from "src/modals/Delete/Delete";
import ArouseInterest from "src/modals/ArouseInterest/ArouseInterest";
import FirstFollowUp from "src/modals/FirstFollowUp/FirstFollowUp";
import SecondFollowUp from "src/modals/SecondFollowUp/SecondFollowUp";
import Breackup from "src/modals/Breackup/Breackup";
import Renew from "src/modals/Renew/Renew";
import Relapsed from "src/modals/Relapsed/Relapsed";
import { IModalComponent, ModalData } from "./modalContext.types";

const MODALS: Record<string, IModalComponent> = {
  CREATE: Create,
  EDIT: Edit,
  DELETE: Delete,
  AROUSE_INTEREST: ArouseInterest,
  FIRST_FOLLOW_UP: FirstFollowUp,
  SECOND_FOLLOW_UP: SecondFollowUp,
  BREAKUP: Breackup,
  RENEW: Renew,
  RELAPSED: Relapsed,
};

export type MODAL_TYPES = keyof typeof MODALS;

interface ModalContext {
  open: (type: MODAL_TYPES, modalData: ModalData | undefined) => void;
  close: () => void;
  Modal: ReactElement;
  modalData: ModalData | undefined;
}

export const useModalContext = create<ModalContext>((set) => ({
  modalData: undefined,
  Modal: <></>,
  open: (type, modalData) =>
    set((context) => ({
      Modal: MODALS[type]({ close: context.close }),
      modalData,
    })),
  close: () =>
    set({
      Modal: <></>,
      modalData: undefined,
    }),
}));
