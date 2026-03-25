import Modal from "src/components/Molecules/Modal";
import { ModalProps } from "src/contexts/modalContext/modalContext.types";

const Create = ({ close }: ModalProps) => {
  return (
    <Modal visible={true} onClose={close} title="Create">
      "Create"
    </Modal>
  );
};

export default Create;
