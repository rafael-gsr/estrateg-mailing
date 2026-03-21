import { useCallback, useEffect, useState } from "react";

import Modal from "../../Molecules/Modal";

import BaseTemplate from "../../Templates/Base/Base";
import CreateEditContract from "../../Organisms/CreateEditContract";
import { ContractFields } from "../../Organisms/CreateEditContract/CreateEditContract.utils";
import { Contract } from "../../../../types";
import Title from "../../Atoms/Title";
import { Alert, Button, Snackbar } from "@mui/material";
import { Status } from "../../../constants/Status";
import TableTemplate from "../../Templates/Table";

const Home = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [snack, setSnack] = useState<
    | {
        message: string;
        severity: "success" | "error";
      }
    | undefined
  >();
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

  const handleCloseSnack = () => {
    setSnack(undefined);
  };

  const handleOnClose = () => {
    setIsVisible(false);
  };

  const onSubmit = (formValues: ContractFields) => {
    formValues.status = Status.REGULAR;

    setIsLoading(true);

    window.api
      .createContract(formValues as Contract)
      .then((response) => {
        console.log(response);
        setIsVisible(false);
        setIsLoading(false);
        setSnack({
          severity: "success",
          message: "Cadastro criado com sucesso.",
        });
        getOverdued();
      })
      .catch(() => {
        setIsLoading(false);
        setSnack({
          severity: "error",
          message: "Não foi possível salvar o contrato.",
        });
      });
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
          isLoading={isLoading}
        />
      </Modal>

      <TableTemplate data={contracts} />

      <Snackbar
        open={!!snack}
        autoHideDuration={7000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnack} severity={snack?.severity}>
          {snack?.message}
        </Alert>
      </Snackbar>
    </BaseTemplate>
  );
};

export default Home;
