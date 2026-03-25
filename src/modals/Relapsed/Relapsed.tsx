import Modal from "src/components/Molecules/Modal";
import { ModalProps } from "src/contexts/modalContext/modalContext.types";

const Relapsed = ({ close }: ModalProps) => {
  return (
    <Modal visible={true} onClose={close} title="Relapsed">
      "Relapsed"
    </Modal>
  );
};

export default Relapsed;
