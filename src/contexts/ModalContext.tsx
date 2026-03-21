import { ReactElement } from "react";
import { create } from "zustand";
import { Status } from "../constants/Status";

interface ModalData {
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

const MODALS: Record<string, ReactElement> = {
	CREATE: <>create</>,
	EDIT: <>edit</>,
	DELETE: <>delete</>,
	AROUSE_INTEREST: <>arouse</>,
	FIRST_FOLLOW_UP: <>firstfollowup</>,
	SECOND_FOLLOW_UP: <>second follow up</>,
	BREAKUP: <>breakup</>,
	RENEW: <>renew</>,
	RELAPSED: <>relapsed</>,
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
	Modal: <span></span>,
	open: (type, modalData) =>
		set({
			Modal: MODALS[type],
			modalData,
		}),
	close: () =>
		set({
			Modal: <></>,
			modalData: undefined,
		}),
}));
