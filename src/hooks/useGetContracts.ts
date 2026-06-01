import { useState, useEffect, useMemo } from "react";
import { QUERIES } from "src/constants/queries";
import {
  QueryState,
  useQueryState,
} from "src/contexts/queriesValidation/useQueryState";
import { Contract } from "types";

export const useGetContracts = () => {
  const [contracts, setContracts] = useState<Array<Contract> | undefined>();
  const queriesState = useQueryState();

  const queryState = useMemo(
    () => queriesState.queries.get(QUERIES.GET_CONTRACTS),
    [queriesState],
  );

  useEffect(() => {
    const shouldRefetch =
      queryState === undefined ||
      queryState === QueryState.OUTDATED ||
      contracts === undefined;

    if (shouldRefetch) {
      window.api.getOverduedContracts().then((overdued) => {
        setContracts(overdued);
        queriesState.validateQuery(QUERIES.GET_CONTRACTS);
      });
    }
  }, [queriesState, queryState, contracts]);

  return { contracts };
};
