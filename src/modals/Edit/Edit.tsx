    import Modal from "src/components/Molecules/Modal";
    import { useModalContext } from "src/contexts/ModalContext";

    const Edit = () => {
      const {close} = useModalContext()

    return (
      <Modal visible={true} onClose={close} title="Edit">
        "Edit"
      </Modal>
      )
    }

    export default Edit
