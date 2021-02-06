import React from "react";
import "./styles.scss";
import pug from "./pug.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img className="header--logo" src={pug} alt="pug" />
      <div className="header--title">
        <h1>Stock-Treyder</h1>
        <p className="header--subtitle">Become a PUG of Wallstreet</p>
      </div>
    </header>
  );
};

export default Header;
