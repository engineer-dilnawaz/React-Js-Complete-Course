import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// const Modal = forwardRef(function Modal({ children }, ref) {
const Modal = function Modal({ open, onClose, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });

  // if (open && dialog.current) {
  //   dialog.current.showModal();
  // } else if (dialog.current && open === false) {
  //   dialog.current.close();
  // }

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : undefined}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
