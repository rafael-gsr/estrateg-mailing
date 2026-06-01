import { Contract } from "types";
import { useModalContext } from "../../../contexts/modal/ModalContext";
import "./MenuPopup.styles.scss";

function getStylesByState(state: boolean | undefined) {
  if (typeof state === "undefined") return "menu_popup";

  const openStyles = "menu_popup menu_popup--open";
  if (state) return openStyles;

  const closeStyles = "menu_popup menu_popup--close";
  return closeStyles;
}

const MenuPopup = ({
  state,
  contract,
}: {
  state: boolean | undefined;
  contract?: Contract;
}) => {
  const modals = useModalContext();

  return (
    <>
      <div className={getStylesByState(state)}>
        <span
          className="menu_popup__option"
          onClick={() => modals.open("EDIT", contract)}
        >
          Editar
        </span>

        <span
          className="menu_popup__option"
          onClick={() => modals.open("AROUSE_INTEREST", contract)}
        >
          Despertar interesse
        </span>

        <span
          className="menu_popup__option"
          onClick={() => modals.open("FIRST_FOLLOW_UP", contract)}
        >
          Enviar follow up 1
        </span>

        <span
          className="menu_popup__option"
          onClick={() => modals.open("SECOND_FOLLOW_UP", contract)}
        >
          Enviar follow up 2
        </span>

        <span
          className="menu_popup__option"
          onClick={() => modals.open("BREAKUP", contract)}
        >
          Breakup
        </span>

        <span
          className="menu_popup__option"
          onClick={() => modals.open("RENEW", contract)}
        >
          Renovado
        </span>

        <span
          className="menu_popup__option"
          onClick={() => modals.open("RELAPSED", contract)}
        >
          Reincidiu contrato
        </span>

        <span
          className="menu_popup__option--delete"
          onClick={() => modals.open("DELETE", contract)}
        >
          Deletar
        </span>
      </div>
    </>
  );
};

export default MenuPopup;
