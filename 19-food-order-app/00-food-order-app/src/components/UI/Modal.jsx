import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "", onClose }) {
  const dialogRef = useRef();
  useEffect(
    function () {
      const modal = dialogRef.current;
      if (open) {
        modal.showModal();
      }
      //   else {
      //     modal.close();
      //   }

      return function () {
        modal.close();
      };
    },
    [open]
  );

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
