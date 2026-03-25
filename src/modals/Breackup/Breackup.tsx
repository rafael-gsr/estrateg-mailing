import Modal from "src/components/Molecules/Modal";
import { ModalProps } from "src/contexts/modalContext/modalContext.types";

const Breackup = ({ close }: ModalProps) => {
  return (
    <Modal visible={true} onClose={close} title="Breackup">
      "Breackup"
    </Modal>
  );
};

export default Breackup;
