import { useModalContext } from "../../../contexts/modal/ModalContext";
import "./MenuPopup.styles.scss";

function getStylesByState(state: boolean | undefined) {
  if (typeof state === "undefined") return "menu_popup";

  const openStyles = "menu_popup menu_popup--open";
  if (state) return openStyles;

  const closeStyles = "menu_popup menu_popup--close";
  return closeStyles;
}

const MenuPopup = ({ state }: { state: boolean | undefined }) => {
  const { open } = useModalContext();

  return (
    <>
      <div className={getStylesByState(state)}>
        <span
          className="menu_popup__option"
          onClick={() => open("EDIT", undefined)}
        >
          Editar
        </span>

        <span
          className="menu_popup__option"
          onClick={() => open("AROUSE_INTEREST", undefined)}
        >
          Despertar interesse
        </span>

        <span
          className="menu_popup__option"
          onClick={() => open("FIRST_FOLLOW_UP", undefined)}
        >
          Enviar follow up 1
        </span>

        <span
          className="menu_popup__option"
          onClick={() => open("SECOND_FOLLOW_UP", undefined)}
        >
          Enviar follow up 2
        </span>

        <span
          className="menu_popup__option"
          onClick={() => open("BREAKUP", undefined)}
        >
          Breakup
        </span>

        <span
          className="menu_popup__option"
          onClick={() => open("RENEW", undefined)}
        >
          Renovado
        </span>

        <span
          className="menu_popup__option"
          onClick={() => open("RELAPSED", undefined)}
        >
          Reincidiu contrato
        </span>

        <span
          className="menu_popup__option--delete"
          onClick={() => open("DELETE", undefined)}
        >
          Deletar
        </span>
      </div>
    </>
  );
};

export default MenuPopup;
