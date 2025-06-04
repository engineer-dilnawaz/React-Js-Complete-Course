import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef("");
  const [endteredPlayerName, setEnteredPlayerName] = useState();
  // const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    // setSubmitted(false);
    // setPlayerName(e.target.value);
  }

  function handleClick() {
    // setSubmitted(true);

    setEnteredPlayerName(playerName.current.value);

    playerName.current.value = ""; //! imperative way of clearing
  }

  return (
    <section id="player">
      <h2>Welcome {endteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          //  value={playerName}
          // onChange={handleChange}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
