import React from "react";
import "./GameScreen.scss";
import Button, { ButtonColor } from "../../common/Button";

const GameScreen: React.FC = () => {
  return (
    <div className="game-screen">
      <div className="graph">
        <div>HERE IT WILL BE GRAPH</div>
      </div>
      <div className="game-screen--actions">
        <Button color={ButtonColor.Green}>Buy</Button>
        <Button color={ButtonColor.Red}>Sell</Button>
      </div>
    </div>
  );
};

export default GameScreen;
