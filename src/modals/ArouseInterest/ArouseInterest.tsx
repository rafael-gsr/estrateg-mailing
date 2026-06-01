import Text from "src/components/Atoms/Text";
import ConfirmButtons from "src/components/Molecules/ConfirmButtons/ConfirmButtons";
import Modal from "src/components/Molecules/Modal";
import { ModalProps } from "src/contexts/modal/modalContext.types";
import { useArouseInterest } from "src/hooks/useArouseInterest";

const ArouseInterest = ({ close, contract }: ModalProps) => {
  const { send, loading } = useArouseInterest();

  return (
    <Modal
      size="SM"
      visible={true}
      onClose={close}
      title="Desperatar interesse"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Text colorScheme="light" type="p">
          Esse cliente recebeu o email do tipo "Despertar interesse?"
        </Text>

        <ConfirmButtons
          confirm={{
            action: () => {
              close();
              send(contract?.id || "");
            },
            loading,
          }}
          cancel={{
            action: () => {
              close();
            },
          }}
        />
      </div>
    </Modal>
  );
};

export default ArouseInterest;
