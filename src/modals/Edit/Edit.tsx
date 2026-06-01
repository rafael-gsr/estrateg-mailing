import Modal from "src/components/Molecules/Modal";
import CreateEditContract from "src/components/Organisms/CreateEditContract";
import { ContractFields } from "src/components/Organisms/CreateEditContract/CreateEditContract.utils";
import { ModalProps } from "src/contexts/modal/modalContext.types";

const Edit = ({ close, contract }: ModalProps) => {
  const onSubmit = (data: ContractFields) => {
    console.log(data);
  };

  return (
    <Modal visible={true} onClose={close} title="Editar Cadastro">
      <CreateEditContract
        onSubmit={onSubmit}
        onCancel={close}
        defaultValues={contract}
      />
    </Modal>
  );
};

export default Edit;
