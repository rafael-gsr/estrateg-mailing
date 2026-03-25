    import Modal from "src/components/Molecules/Modal";
    import { useModalContext } from "src/contexts/ModalContext";

    const ArouseInterest = () => {
      const {close} = useModalContext()

    return (
      <Modal visible={true} onClose={close} title="ArouseInterest">
        "ArouseInterest"
      </Modal>
      )
    }

    export default ArouseInterest
