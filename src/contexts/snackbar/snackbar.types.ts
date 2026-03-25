import { AlertColor } from "@mui/material";

export type SnackbarContextProps = {
  severity: AlertColor;
  message: string;
  time?: number;
};

export interface UseSnackbar {
  props: SnackbarContextProps;

  visible: boolean;
  open: ({ severity, message }: SnackbarContextProps) => void;
  close: () => void;
}
