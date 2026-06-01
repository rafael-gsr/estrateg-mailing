import { MouseEventHandler, PropsWithChildren } from "react";
import "./Modal.styles.scss";
import CloseIcon from "../../Atoms/CloseIcon";
import Title from "../../Atoms/Title";

type Sizes = "SM" | "MD" | "LG";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  size?: Sizes;
} & PropsWithChildren;

const Modal = ({
  children,
  visible,
  onClose,
  title,
  size = "MD",
}: ModalProps) => {
  const handleOnClose = () => onClose();

  const handleClickOutside: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target == event.currentTarget) {
      handleOnClose();
    }
  };

  if (visible)
    return (
      <div className="modal " onClick={handleClickOutside}>
        <div className={`modal__frame modal__frame__size_${size}`}>
          <CloseIcon onClick={handleOnClose} />

          <Title level={2} colorScheme="light">
            {title}
          </Title>

          <div>{children}</div>
        </div>
      </div>
    );

  return <></>;
};

export default Modal;
