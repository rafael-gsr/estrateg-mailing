    import Modal from "src/components/Molecules/Modal";
    import { useModalContext } from "src/contexts/ModalContext";

    const SecondFollowUp = () => {
      const {close} = useModalContext()

    return (
      <Modal visible={true} onClose={close} title="SecondFollowUp">
        "SecondFollowUp"
      </Modal>
      )
    }

    export default SecondFollowUp
