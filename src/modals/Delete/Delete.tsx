    import Modal from "src/components/Molecules/Modal";
    import { useModalContext } from "src/contexts/ModalContext";

    const Delete = () => {
      const {close} = useModalContext()

    return (
      <Modal visible={true} onClose={close} title="Delete">
        "Delete"
      </Modal>
      )
    }

    export default Delete
