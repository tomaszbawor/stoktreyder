import React from "react";
import Header from "./components/Header";
import GameContent from "./components/GameContent";

const App: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <GameContent />
      </div>
    </>
  );
};

export default App;
