// import React from "react";

// export default function Workout({ title, description, time, onComplete }) {
//   const timerId = React.useRef(null);
//   const [timer, setTimer] = React.useState(10);
//   function handleStartWorkout() {
//     if (timerId.current) return;
//     console.log("id setting");
//     // Todo: Start timer
//     timerId.current = setInterval(() => {
//       console.log("timer calling");
//       setTimer((prev) => {
//         if (prev === 0) {
//           handleStopWorkout();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//   }

//   function handleStopWorkout() {
//     // Todo: Stop timer
//     clearInterval(timerId.current);
//     timerId.current = null;
//     setTimeout(() => onComplete(), 0);
//   }

//   return (
//     <article className="workout">
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <p>{timer}</p>
//       <p>
//         <button onClick={handleStartWorkout}>Start</button>
//         <button onClick={handleStopWorkout}>Stop</button>
//       </p>
//     </article>
//   );
// }
