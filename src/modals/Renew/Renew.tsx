import Modal from "src/components/Molecules/Modal";
import { ModalProps } from "src/contexts/modalContext/modalContext.types";

const Renew = ({ close }: ModalProps) => {
  return (
    <Modal visible={true} onClose={close} title="Renew">
      "Renew"
    </Modal>
  );
};

export default Renew;
