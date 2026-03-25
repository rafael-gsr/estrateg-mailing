import { create } from "zustand";
import { SnackbarContextProps, UseSnackbar } from "./snackbar.types";

export const useSnackbar = create<UseSnackbar>((set) => ({
  props: {
    message: "",
    severity: "info",
    time: 10_000,
  },

  visible: false,
  open: (props: SnackbarContextProps) => set({ props, visible: true }),
  close: () => set({ visible: false }),
}));
