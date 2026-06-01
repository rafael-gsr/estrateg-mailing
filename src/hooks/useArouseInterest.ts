import { useState } from "react";
import { QUERIES } from "src/constants/queries";
import { useQueryState } from "src/contexts/queriesValidation/useQueryState";
import { useSnackbar } from "../contexts/snackbar/useSnackbar";

export const useArouseInterest = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const snack = useSnackbar();
  const queriesStates = useQueryState();

  const send = async (id: string) => {
    setLoading(true);

    try {
      await window.api.nextState(id);

      snack.open({
        severity: "success",
        message: "Contrato enviado para 'Despertar Interesse'.",
      });

      queriesStates.outdateQuery(QUERIES.GET_CONTRACTS);
    } catch {
      snack.open({
        severity: "error",
        message: "Não foi possível atualizar o contrato.",
      });
    }

    setLoading(false);
  };

  return { send, loading };
};
