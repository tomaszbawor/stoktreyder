import React from "react";
import "./GameContent.scss";
import GameStats from "./GameStats";
import GameScreen from "./GameScreen";

const GameContent: React.FC = () => {
  return (
    <div className="game">
      <GameStats />
      <GameScreen />
    </div>
  );
};
export default GameContent;
