import { FC, MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
interface IPropsModal {
  children: string;
  onToggle: () => void;
}

const modalRoot: any = document.querySelector("#modal");

const Modal: FC<IPropsModal> = ({ children, onToggle }) => {
  const handleBackdropCloseModal = (
    event: MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) onToggle();
  };

  useEffect(() => {
    const handlePressCloseEscape = (event: any): void => {
      if (event.code === "Escape") {
        onToggle();
      }
    };
    window.addEventListener("keydown", handlePressCloseEscape);

    return () => {
      window.removeEventListener("keydown", handlePressCloseEscape);
    };
  }, [onToggle]);

  return createPortal(
    <div
      onClick={handleBackdropCloseModal}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
      }}
    >
      <img src={children} width="768" alt="cat" />
    </div>,
    modalRoot
  );
};

export { Modal };
