import React from "react";
import "./GameScreen.scss";
import Button, { ButtonColor } from "../../common/Button";
import Graph from "./Graph";

const GameScreen: React.FC = () => {
  return (
    <div className="game-screen">
      <Graph />
      <div className="game-screen--actions">
        <Button color={ButtonColor.Green}>Buy</Button>
        <Button color={ButtonColor.Red}>Sell</Button>
      </div>
    </div>
  );
};

export default GameScreen;
