import Modal from "src/components/Molecules/Modal";
import { ModalProps } from "src/contexts/modalContext/modalContext.types";

const FirstFollowUp = ({ close }: ModalProps) => {
  return (
    <Modal visible={true} onClose={close} title="FirstFollowUp">
      "FirstFollowUp"
    </Modal>
  );
};

export default FirstFollowUp;
