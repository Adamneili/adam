import React from "react";
import Adam from "./Adam";


const PlayersList = ({tab}) => {
  return (
    <div>
      {tab.map((player, index) => (
       <Adam key={index} player={player} />
      ))}
    </div>
  );
};

export default PlayersList;