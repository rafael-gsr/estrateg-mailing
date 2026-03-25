import { Alert, Snackbar } from "@mui/material";
import { PropsWithChildren } from "react";
import { useSnackbar } from "./useSnackbar";

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
