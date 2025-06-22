import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}

// import { createPortal } from "react-dom";
// import { motion } from "framer-motion";

// const hiddenAnimationState = {
//   opacity: 0,
//   y: 30,
// }

// export default function Modal({ title, children, onClose }) {
//   return createPortal(
//     <>
//       <div className="backdrop" onClick={onClose} />
//       <motion.dialog
//         open
//         className="modal"
//         initial={hiddenAnimationState} // reuseability
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         exit={{
//           opacity: 0,
//           y: 30,
//         }}
//       >
//         <h2>{title}</h2>
//         {children}
//       </motion.dialog>
//     </>,
//     document.getElementById("modal")
//   );
// }
