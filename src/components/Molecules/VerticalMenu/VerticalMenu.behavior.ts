import { RefObject, useState } from "react";

export const useOpenVerticalMenu = (
  openRef: RefObject<HTMLDivElement | null>,
) => {
  const [open, setOpen] = useState<boolean | undefined>(undefined);
  const handleOpen = () => {
    setOpen((alreadyOpen) => {
      if (alreadyOpen) {
        handleClose();
        return;
      }

      window.addEventListener("click", observeClickEventHandler);
      return true;
    });

    const handleClose = () => {
      setOpen((prev) => {
        if (prev) return false;
        return prev;
      });

      window.removeEventListener("click", observeClickEventHandler);
    };

    const observeClickEventHandler = (event: PointerEvent) => {
      const clickedElement = event.target as Node;
      const clickedDivElement = openRef.current?.isSameNode(clickedElement);

      const clickedChildElement =
        openRef.current?.isSameNode(clickedElement.parentElement) ||
        openRef.current?.isSameNode(
          clickedElement.parentElement?.parentElement || null,
        );

      const isClickingOutside = !(clickedDivElement || clickedChildElement);

      if (isClickingOutside) handleClose();
    };
  };

  return { open, handleOpen };
};
