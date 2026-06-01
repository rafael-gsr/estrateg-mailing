#! /bin/bash

modals_to_create=("Create" "Edit" "Delete" "ArouseInterest" "FirstFollowUp" "SecondFollowUp" "Breackup" "Renew" "Relapsed" )

for modal_name in "${modals_to_create[@]}"; do  

  content="$(cat << EOF
    import Modal from "src/components/Molecules/Modal";
    import { useModalContext } from "src/contexts/ModalContext";

    const ${modal_name} = () => {
      const {close} = useModalContext()

    return (
      <Modal visible={true} onClose={close} title="${modal_name}">
        "${modal_name}"
      </Modal>
      )
    }

    export default ${modal_name}
EOF
  )"

  mkdir "src/modals/${modal_name}"
  touch "src/modals/$modal_name/${modal_name}.tsx"
  echo "${content}" >> "src/modals/$modal_name/${modal_name}.tsx"
done
