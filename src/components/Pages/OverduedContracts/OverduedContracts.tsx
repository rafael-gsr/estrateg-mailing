import { useGetOverduedContracts } from "../../../hooks/useGetOverduedContracts";
import Title from "../../Atoms/Title";
import BaseTemplate from "../../Templates/Base";
import TableTemplate from "../../Templates/Table";

const OverduedContracts = () => {
	const { contracts, isLoading } = useGetOverduedContracts();

	return isLoading ? (
		<>...carregando</>
	) : (
		<BaseTemplate>
			<Title level={1} colorScheme="light">
				Contratos vencidos
			</Title>

			<TableTemplate data={contracts} />
		</BaseTemplate>
	);
};

export default OverduedContracts;
