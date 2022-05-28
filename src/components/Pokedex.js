import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PokedexCard from "./PokedexCard";
import "../styles/Pokedex.css";
import fondo from "../assets/pokebola.png";
import config from "../assets/configuraciones.png";
import output from "../assets/cerrar-sesion.png";

const Pokedex = () => {
  const userName = useSelector((state) => state.userName);
  const theme = useSelector((state) => state.theme);
  const pages = useSelector((state) => state.pages);

  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);
  const [show, setShow] = useState(true);

  //https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=160/")
      .then((res) => {
        setPokemons(res.data.results);
      });
    axios.get(`https://pokeapi.co/api/v2/type/`).then((res) => {
      setTypes(res.data.results);
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${pokemonName}`);
  };

  const handleType = (e) => {
    axios.get(e.target.value).then((res) => {
      setPokemons(res.data.pokemon);
    });
  };

  const [page, setPage] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const itemsNumber = pages;
  const lastIndex = page * itemsNumber;
  const firstIndex = lastIndex - itemsNumber;
  const pokemonPaginated = pokemons.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokemons.length / itemsNumber);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }
  
  const handleNextbtn = () => {
    setPage(page + 1);

    if (page +1 > maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }
  const handlePrevbtn = () => {
    setPage(page - 1);

    if ((page -1) % pageNumberLimit == 0){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  let pageIncrementBtn = null;
  if(pagesNumbers.length>maxPageNumberLimit){
    pageIncrementBtn = <button onClick={handleNextbtn} disabled={page >= totalPages}> &hellip;</button>
  }
  let pageDecrementBtn = null;
  if(pagesNumbers.length>=maxPageNumberLimit){
    pageDecrementBtn = <button onClick={handlePrevbtn} disabled={page <= pageNumberLimit} > &hellip;</button>
  }


  const renderNumber = pagesNumbers.map((number) => {
  if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
  return(
    <button
      onClick={() => setPage(number)}
      key={number}
      className={page == number ? "activeButton" : ""}>
      {number}
      </button>
  );
  }else{
    return null
  }
  }
    
)

  return (
    <div className={`pokedex ${theme ? "open" : ""} `}>
      <img className="img-welcome" src={fondo} alt="" />

      <h1>Pokedex</h1>
      <p>Welcome {userName}, here you can find you favorite pokemon.</p>

      <div className="option-switch">
        <b>Type</b>
        <label className="switch">
          <input type="checkbox" onClick={() => setShow(!show)} />
          <span className="slider" />
        </label>
        <b>Name</b>
      </div>

      {show ? (
        <div className="select">
          <select onChange={handleType} className="options" defaultValue={1}>
            <option value="1" disabled hidden>
              Select type
            </option>
            {types.map((type) => (
              <option key={type.url} value={type.url}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <form className="input-container" onSubmit={submit}>
          <label htmlFor="character-name" />
          <input
            type="text"
            id="character-name"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            placeholder="Search Here..."
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      )}

      <div className="Card-responsive">
        {pokemonPaginated.map((pokemon) => (
          <PokedexCard
            pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </div>

      <div>
        <Link to={"/"}>
          <img src={output} className="img-output" alt="" />
        </Link>
      </div>

      <div>
        <Link to={"/pokedex/config"}>
          <img src={config} className="img-config" alt="" />
        </Link>
      </div>

      <div className="responsive-buttons">
        <button onClick={handlePrevbtn} disabled={page <= 1}>
          <i className="fa-solid fa-backward"></i>
        </button>
        {/* {pagesNumbers.map((number) => {
            {
              (number<maxPageNumberLimit+1 && number > minPageNumberLimit) ? (
              <button
              onClick={() => setPage(number)}
              key={number}
              className={page == number ? "activeButton" : ""}>
              {number}
              </button>
            ):(
              <div key={number}>
              <p>Holaa</p>
              </div>
            )
            }
          } 
        )} */}
        
        {pageDecrementBtn}
        {renderNumber}
        {pageIncrementBtn}

        <button
          onClick={handleNextbtn}
          disabled={page >= totalPages}
        >
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
};

export default Pokedex;
