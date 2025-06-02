import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditiClick() {
    // if (isEditing) {
    //   setIsEditing(false);
    // } else {
    //   setIsEditing(true);
    // }
    setIsEditing((prev) => !prev);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerNmae = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerNmae = (
      <input
        type="text"
        required
        // defaultValue={name}
        value={playerName}
        onChange={handleChange}
      />
    );
    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerNmae}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditiClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
