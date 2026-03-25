    import Modal from "src/components/Molecules/Modal";
    import { useModalContext } from "src/contexts/ModalContext";

    const Renew = () => {
      const {close} = useModalContext()

    return (
      <Modal visible={true} onClose={close} title="Renew">
        "Renew"
      </Modal>
      )
    }

    export default Renew
