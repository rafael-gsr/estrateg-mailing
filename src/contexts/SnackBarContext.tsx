import { Snackbar, Alert, AlertColor } from "@mui/material";
import { PropsWithChildren } from "react";
import { create } from "zustand";

type SnackbarContextProps = {
	severity: AlertColor;
	message: string;
	time?: number;
};

interface UseSnackbar {
	props: SnackbarContextProps;

	visible: boolean;
	open: ({ severity, message }: SnackbarContextProps) => void;
	close: () => void;
}

const useSnackbar = create<UseSnackbar>((set) => ({
	props: {
		message: "",
		severity: "info",
		time: 10_000,
	},

	visible: false,
	open: (props: SnackbarContextProps) => set({ props, visible: true }),
	close: () => set({ visible: false }),
}));

export const SnackbarProvider = ({ children }: PropsWithChildren) => {
	const { visible, props, close } = useSnackbar();

	return (
		<>
			{children}

			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={visible}
				autoHideDuration={props.time || 10_000}
				onClose={close}
				sx={{ width: "100%" }}
			>
				<Alert severity={props.severity} variant="filled">
					{props.message}
				</Alert>
			</Snackbar>
		</>
	);
};

export default useSnackbar;
