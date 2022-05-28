import React from "react";
import { Link } from "react-router-dom";
import fondo from "../assets/pokebola.png";
import "../styles/config.css";
import { useDispatch, useSelector } from "react-redux";
import { setPages, setTheme } from "../redux/actions";

const Config = () => {
  const dispatch = useDispatch();

  const pages = useSelector((state) => state.pages);
  const theme = useSelector((state) => state.theme);

  const numberPages = (e) => {
    dispatch(setPages(e.target.value));
  };
  console.log(pages);

  return (
    <div className={`config-body ${theme ? "open" : ""} `}>
      <img className="img-welcomeInfo" src={fondo} alt="" />
      <div className="config">
        <Link to={"/pokedex"} className="back">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <h1>Settings</h1>
        <div className="theme">
          <h1>Theme</h1>
          <b>Light</b>
          <label className="switch">
            <input
              type="checkbox"
              checked={theme}
              onChange={() => dispatch(setTheme(!theme))}
            />
            <span className="slider" />
          </label>
          <b>Dark</b>
        </div>
        <div className="items-page">
          <h1>Items per page</h1>

          <div className="select-page">
            <select onChange={numberPages} className="options" defaultValue={1}>
              <option value='1' disabled hidden>Select quantity</option>
              <option value='4'>4 PAGE</option>
              <option value='8'>8 PAGE</option>
              <option value='12'>12 PAGE</option>
              <option value='16'>16 PAGE</option>
              <option value='20'>20 PAGE</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Config;
