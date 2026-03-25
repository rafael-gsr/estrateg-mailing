    import Modal from "src/components/Molecules/Modal";
    import { useModalContext } from "src/contexts/ModalContext";

    const Relapsed = () => {
      const {close} = useModalContext()

    return (
      <Modal visible={true} onClose={close} title="Relapsed">
        "Relapsed"
      </Modal>
      )
    }

    export default Relapsed
