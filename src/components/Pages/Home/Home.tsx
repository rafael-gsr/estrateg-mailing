import { useCallback, useEffect, useState } from "react";

import Modal from "../../Molecules/Modal";

import BaseTemplate from "../../Templates/Base/Base";
import CreateEditContract from "../../Organisms/CreateEditContract";
import { ContractFields } from "../../Organisms/CreateEditContract/CreateEditContract.utils";
import { Contract } from "../../../../types";
import Title from "../../Atoms/Title";
import { Button } from "@mui/material";
import { Status } from "../../../constants/Status";
import TableTemplate from "../../Templates/Table";
import { useCreateContract } from "../../../hooks/useCreateContract";

const Home = () => {
  const [contracts, setContracts] = useState<Array<Contract> | undefined>();

  const getOverdued = useCallback(
    () =>
      window.api
        .getOverduedContracts()
        .then((overdued) => setContracts(overdued)),
    [],
  );

  useEffect(() => {
    getOverdued();
  }, [getOverdued]);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleOnClose = () => {
    setIsVisible(false);
  };

  const onSuccess = () => {
    handleOnClose();
    getOverdued();
  };

  const { send, loading } = useCreateContract({ onSuccess });

  const onSubmit = (formValues: ContractFields) => {
    formValues.status = Status.REGULAR;
    send(formValues as Contract);
  };

  return (
    <BaseTemplate>
      <Title level={1} colorScheme="light">
        Cadastrar novo contrato
      </Title>

      <Button variant="contained" onClick={() => setIsVisible(true)}>
        Novo
      </Button>

      <Modal visible={isVisible} onClose={handleOnClose} title="Novo Contrato">
        <CreateEditContract
          onCancel={() => setIsVisible(false)}
          onSubmit={onSubmit}
          isLoading={loading}
        />
      </Modal>

      <TableTemplate data={contracts} />
    </BaseTemplate>
  );
};

export default Home;
