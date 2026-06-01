import { useRef } from "react";
import "./VerticalMenu.styles.scss";
import OptionsIcon from "@mui/icons-material/MoreVert";
import MenuPopup from "../MenuPopup";
import { useOpenVerticalMenu } from "./VerticalMenu.behavior";
import { Contract } from "types";

const VerticalMenu = ({ contract }: { contract: Contract }) => {
  const openRef = useRef<HTMLDivElement>(null);
  const { open, handleOpen } = useOpenVerticalMenu(openRef);

  return (
    <div ref={openRef} className="actions" onClick={handleOpen}>
      <OptionsIcon
        className="actions__options"
        sx={{
          backgroundColorL: "white",
          ":hover": {
            backgroundColorL: "var(--variant-containedBg)",
          },
        }}
      />

      <MenuPopup contract={contract} state={open} />
    </div>
  );
};

export default VerticalMenu;
