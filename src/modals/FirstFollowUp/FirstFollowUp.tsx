    import Modal from "src/components/Molecules/Modal";
    import { useModalContext } from "src/contexts/ModalContext";

    const FirstFollowUp = () => {
      const {close} = useModalContext()

    return (
      <Modal visible={true} onClose={close} title="FirstFollowUp">
        "FirstFollowUp"
      </Modal>
      )
    }

    export default FirstFollowUp
