import React from "react";
import { Link } from "react-router-dom";
import "../styles/config.css";

const Config = () => {
  return (
    <div className="config">
      <Link to={'/pokedex'} className="back">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <h1>Settings</h1>
      <div className="theme">
        <h1>Theme</h1>
        <b>Light</b>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider" />
        </label>
        <b>Dark</b>
      </div>
      <div className="items-page">
        <h1>Items per page</h1>
        <div className="select-page">
        <select name="" id="" className="options">
            <option value="">4 PAGE</option>
            <option value="">8 PAGE</option>
            <option value="">12 PAGE</option>
            <option value="">16 PAGE</option>
            <option value="">20 PAGE</option>
        </select>

        </div>
      </div>
    </div>
  );
};

export default Config;
