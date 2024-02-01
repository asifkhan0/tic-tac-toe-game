import React, { useState } from "react";

const Players = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleOnChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleOnChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Players;
