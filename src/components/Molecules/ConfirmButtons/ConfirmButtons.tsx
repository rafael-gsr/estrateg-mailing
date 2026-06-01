import { Button } from "@mui/material";
import "./ConfirmButtons.styles.scss";

type ButtonProps = {
  label?: string;
  action?: () => void;
  loading?: boolean;
};

type ConfirmButtonsProps = {
  cancel?: ButtonProps;
  confirm?: ButtonProps;
};

const ConfirmButtons = ({ cancel, confirm }: ConfirmButtonsProps) => (
  <div className="confirm_buttons_wrapper">
    <Button
      variant="outlined"
      onClick={cancel?.action}
      loading={cancel?.loading}
    >
      {cancel?.label || "Cancelar"}
    </Button>

    <Button
      variant="contained"
      onClick={confirm?.action}
      loading={confirm?.loading}
    >
      {confirm?.label || "Confirmar"}
    </Button>
  </div>
);

export default ConfirmButtons;
