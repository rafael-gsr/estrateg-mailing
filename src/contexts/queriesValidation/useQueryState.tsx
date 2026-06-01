import { create } from "zustand";

export enum QueryState {
  VALID = "VALID",
  OUTDATED = "OUTDATED",
}
type QueryInvalidationContextTypes = {
  queries: Map<string, QueryState>;
  outdateQuery: (queryKey: string) => void;
  validateQuery: (queryKey: string) => void;
};

export const useQueryState = create<QueryInvalidationContextTypes>((set) => ({
  queries: new Map(),

  outdateQuery: (queryKey: string) =>
    set((state) => ({
      ...state,
      queries: new Map(state.queries).set(queryKey, QueryState.OUTDATED),
    })),

  validateQuery: (queryKey: string) =>
    set((state) => ({
      ...state,
      queries: new Map(state.queries).set(queryKey, QueryState.VALID),
    })),
}));
