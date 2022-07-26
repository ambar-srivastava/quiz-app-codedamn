import React, { useContext } from "react";
import { GameStateContext } from "../Helpers/Contexts";

const Menu = () => {
  const { setGameState, setUserName } =
    useContext(GameStateContext);

  return (
    <div className="Menu">
      <form>
        <label htmlFor="">Enter your Name</label>
        <input
          required="required"
          type="text"
          placeholder="write"
          onChange={(event) => setUserName(event.target.value)}
        />
        <button
          onClick={() => {
            setGameState("playing");
          }}
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default Menu;
