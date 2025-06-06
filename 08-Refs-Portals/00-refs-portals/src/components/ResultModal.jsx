import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

//? New React Version handling ref prop
export default function ResultModal({
  onReset,
  targetTime,
  remainingTime,
  ref,
}) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    // <dialog className="result-modal" open> //open means open the dialog forcefully
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2>Your score {score}.</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

//? Old React Version handling ref

// const ResultModal = forwardRef(function ResultModal(
//   { result, targetTime },
//   ref
// ) {
//     const dialog = useRef();
//     useImperativeHandle(ref, () => {
//       return {
//         open() {
//           dialog.current.showModal();
//         },
//       };
//     });

//   return (
//     // <dialog className="result-modal" open> //open means open the dialog forcefully
//     <dialog ref={dialog} className="result-modal">
//       <h2>You {result}</h2>
//       <p>
//         The target time was <strong>{targetTime} seconds.</strong>
//       </p>
//       <p>
//         You stopped the timer with <strong>X seconds left.</strong>
//       </p>
//       <form action="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// });

// export default ResultModal;
