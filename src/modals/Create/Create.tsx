    import Modal from "src/components/Molecules/Modal";
    import { useModalContext } from "src/contexts/ModalContext";

    const Create = () => {
      const {close} = useModalContext()

    return (
      <Modal visible={true} onClose={close} title="Create">
        "Create"
      </Modal>
      )
    }

    export default Create
