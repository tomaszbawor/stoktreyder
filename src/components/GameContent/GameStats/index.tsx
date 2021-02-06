import React from "react";
import "./GameStats.scss";

const GameStats: React.FC = () => {
  return (
    <div className="stats">
      <div className="stats--header">
        <p>Stats</p>
      </div>
      <div className="stats--content">
        <div>Money: 100.00$</div>
      </div>

      <div className="stats--header">
        <p>Transactions</p>
      </div>
      <div className="stats--transactions">
        <div className="stats--transaction-positive">+100.01$</div>
        <div className="stats--transaction-negative">-100.01$</div>
      </div>
    </div>
  );
};

export default GameStats;
