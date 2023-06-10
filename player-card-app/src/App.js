import React from "react";
import PlayersList from "./PlayersList";
import players from "./players";
const App = () => {
  return (
    <div>
      <h1>Player Card App</h1>
      <PlayersList tab={players}/>
     
    </div>
  );
};

export default App;