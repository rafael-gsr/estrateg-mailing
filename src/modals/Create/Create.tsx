import Modal from "src/components/Molecules/Modal";
import CreateEditContract from "src/components/Organisms/CreateEditContract";
import { ContractFields } from "src/components/Organisms/CreateEditContract/CreateEditContract.utils";
import { Status } from "src/constants/Status";
import { ModalProps } from "src/contexts/modal/modalContext.types";
import { useCreateContract } from "src/hooks/useCreateContract";
import { Contract } from "types";

const Create = ({ close }: ModalProps) => {
  const { send, loading } = useCreateContract();

  const onSubmit = async (formValues: ContractFields) => {
    formValues.status = Status.REGULAR;
    await send(formValues as Contract);
    close();
  };

  return (
    <Modal visible={true} onClose={close} title="Criar Contrato">
      <CreateEditContract
        onCancel={close}
        onSubmit={onSubmit}
        isLoading={loading}
      />
    </Modal>
  );
};

export default Create;
