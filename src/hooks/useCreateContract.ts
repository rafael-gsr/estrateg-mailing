import { useState } from "react";
import { Contract } from "../../types";
import useSnackbar from "../contexts/SnackBarContext";

export const useCreateContract = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const snack = useSnackbar();

  const [loading, setLoading] = useState<boolean>(false);

  const send = (values: Contract) => {
    setLoading(true);

    window.api
      .createContract(values)
      .then(() => {
        snack.open({
          severity: "success",
          message: "Contrato criado com sucesso.",
        });
        onSuccess?.();
      })
      .catch(() => {
        snack.open({
          severity: "error",
          message: "Não foi possível salvar o contrato.",
        });
        onError?.();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { send, loading };
};
