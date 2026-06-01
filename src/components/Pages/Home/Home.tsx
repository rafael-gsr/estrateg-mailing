import BaseTemplate from "../../Templates/Base/Base";
import Title from "../../Atoms/Title";
import { Button } from "@mui/material";
import TableTemplate from "../../Templates/Table";
import { useGetContracts } from "src/hooks/useGetContracts";
import { useModalContext } from "src/contexts/modal/ModalContext";

const Home = () => {
  const modals = useModalContext();
  const get = useGetContracts();

  return (
    <BaseTemplate>
      <Title level={1} colorScheme="light">
        Cadastrar novo contrato
      </Title>

      <Button
        variant="contained"
        onClick={() => modals.open("CREATE", undefined)}
      >
        Novo
      </Button>

      <TableTemplate data={get.contracts} />
    </BaseTemplate>
  );
};

export default Home;
