import Modal from "src/components/Molecules/Modal";
import { ModalProps } from "src/contexts/modalContext/modalContext.types";

const Delete = ({ close }: ModalProps) => {
  return (
    <Modal visible={true} onClose={close} title="Delete">
      "Delete"
    </Modal>
  );
};

export default Delete;
