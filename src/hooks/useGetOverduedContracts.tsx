import { useState, useEffect } from "react";
import { Contract } from "../../types";
import useSnackbar from "../contexts/SnackBarContext";

export const useGetOverduedContracts = () => {
	const [contracts, setContracts] = useState<Array<Contract> | undefined>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { open } = useSnackbar();

	useEffect(() => {
		setIsLoading(true);
		window.api
			.getOverduedContracts()
			.then((overdued) => {
				setContracts(overdued);
				open({ severity: "success", message: "Consegui pegar os contratos" });
				setIsLoading(false);
			})
			.catch(() => {
				open({ severity: "error", message: "erro ao buscar os contratos" });
				setIsLoading(false);
			});
	}, [open]);

	return { contracts, isLoading };
};
