import Modal from "src/components/Molecules/Modal";
import { ModalProps } from "src/contexts/modalContext/modalContext.types";

const ArouseInterest = ({ close }: ModalProps) => {
  return (
    <Modal visible={true} onClose={close} title="ArouseInterest">
      "ArouseInterest"
    </Modal>
  );
};

export default ArouseInterest;
