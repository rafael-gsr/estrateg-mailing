import { useState, useEffect } from "react";
import { Contract } from "types";
import { useSnackbar } from "../contexts/snackbar/useSnackbar";

export const useGetOverduedContracts = () => {
  const [contracts, setContracts] = useState<Array<Contract> | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { open } = useSnackbar();

  useEffect(() => {
    window.api
      .getOverduedContracts()
      .then((overdued) => {
        setContracts(overdued);
        open({ severity: "success", message: "Consegui pegar os contratos" });
      })
      .catch(() => {
        open({ severity: "error", message: "erro ao buscar os contratos" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [open]);

  return { contracts, isLoading };
};
