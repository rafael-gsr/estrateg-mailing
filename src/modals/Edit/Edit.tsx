import Modal from "src/components/Molecules/Modal";
import { ModalProps } from "src/contexts/modalContext/modalContext.types";

const Edit = ({ close }: ModalProps) => {
  return (
    <Modal visible={true} onClose={close} title="Edit">
      "Edit"
    </Modal>
  );
};

export default Edit;
