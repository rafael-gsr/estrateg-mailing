import Modal from "src/components/Molecules/Modal";
import { ModalProps } from "src/contexts/modalContext/modalContext.types";

const SecondFollowUp = ({ close }: ModalProps) => {
  return (
    <Modal visible={true} onClose={close} title="SecondFollowUp">
      "SecondFollowUp"
    </Modal>
  );
};

export default SecondFollowUp;
