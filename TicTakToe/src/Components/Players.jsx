import { useState } from "react";

export default function Player({ initialname, symbol }) {
  const [isediting, setediting] = useState(false);
  const [playername, setplayername] = useState(initialname);

  function handleEditClick() {
    setediting(edit=>!edit);
  }
  function handleChange(event) {
    setplayername(event.target.value);
  }
  return (
    <>
      <li>
        <span className="player">
          {!isediting ? (
            <span className="player-name">{playername}</span>
          ) : (
            <input type="text" required value={playername} onChange={handleChange} />
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isediting ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
