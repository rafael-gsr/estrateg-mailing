    import Modal from "src/components/Molecules/Modal";
    import { useModalContext } from "src/contexts/ModalContext";

    const Breackup = () => {
      const {close} = useModalContext()

    return (
      <Modal visible={true} onClose={close} title="Breackup">
        "Breackup"
      </Modal>
      )
    }

    export default Breackup
