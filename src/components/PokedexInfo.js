import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import letras from "../assets/letras2.png";
import "../styles/PokedexInfo.css";
import fondo from "../assets/pokebola.png";
import { useSelector } from "react-redux";

const PokedexInfo = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [pokeMoves, setPokeMoves] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPokemon(res.data);
      setPokeMoves(res.data.moves);
    });
  }, [id]);

  const [pokeColor, setPokeColor] = useState("white");
  const type = pokemon?.types?.[0]?.type?.name;
  useEffect(() => {
    switch (type) {
      case "grass":
        setPokeColor("#02AC66");
        break;
      case "fire":
        setPokeColor("#E36B2C");
        break;
      case "normal":
        setPokeColor("#BC6B7C");
        break;
      case "fighting":
        setPokeColor("#CB735D");
        break;
      case "flying":
        setPokeColor("#56A4AE");
        break;
      case "poison":
        setPokeColor("#A564E3");
        break;
      case "ground":
        setPokeColor("#D69638");
        break;
      case "rock":
        setPokeColor("#8D8D94");
        break;
      case "bug":
        setPokeColor("#999933");
        break;
      case "ghost":
        setPokeColor("#787DDA");
        break;
      case "steel":
        setPokeColor("#728881");
        break;
      case "water":
        setPokeColor("#1479FB");
        break;
      case "electric":
        setPokeColor("#e0af0f");
        break;
      case "psychic":
        setPokeColor("#009999");
        break;
      case "ice":
        setPokeColor("#64CBF5");
        break;
      case "dragon":
        setPokeColor("#C23867");
        break;
      case "fairy":
        setPokeColor("#3BB039");
        break;
      case "dark":
        setPokeColor("#5A5E5D");
        break;
      default:
        setPokeColor("");
        break;
    }
  }, [type]);

  const theme = useSelector((state) => state.theme);


  return (
    <div style={{ backgroundColor: pokeColor }} className="pokeInfo">
      <img className="img-welcomeInfo" src={fondo} alt="" />

      <div className={`poke-info ${theme ? "dark" : ""} `}>
        <Link to={"/pokedex"} className="back-pokeball">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <img src={letras} alt="" />
        <div className="resposive-info">
          <div className="first-info">
            <div className="one-info">
              <img
                src={pokemon.sprites?.other["official-artwork"].front_default}
                className="poke-img"
                alt=""
              />
              <div className="responsive-paragraph">
                <p>
                  <b>{pokemon.weight}</b>
                  <br /> Weight
                </p>
                <p>
                  <b>{pokemon.height}</b>
                  <br /> Height
                </p>
              </div>
              <h1>{pokemon.name}</h1>
              <hr />
              <p># {pokemon.id}</p>
            </div>
            <div className="responsive-typesAbilities">
              <div className="type">
                <h2>Type</h2>
                {pokemon.types?.length === 1 ? (
                  <div className="responsive-types">
                    <p>{pokemon.types?.[0]?.type?.name}</p>
                  </div>
                ) : (
                  <div className="responsive-types">
                    <p>{pokemon.types?.[0]?.type?.name}</p>
                    <p>{pokemon.types?.[1]?.type?.name}</p>
                  </div>
                )}
              </div>
              <div className="abilities">
                <h2>Abilities</h2>
                {pokemon.abilities?.length === 1 ? (
                  <div className="responsive-abilities">
                    <p>{pokemon.abilities?.[0].ability.name}</p>
                  </div>
                ) : pokemon.abilities?.length === 2 ? (
                  <div className="responsive-abilities">
                    <p>{pokemon.abilities?.[0].ability.name}</p>
                    <p>{pokemon.abilities?.[1].ability.name}</p>
                  </div>
                ) : (
                  <div className="responsive-abilities">
                    <p>{pokemon.abilities?.[0].ability.name}</p>
                    <p>{pokemon.abilities?.[1].ability.name}</p>
                    <p>{pokemon.abilities?.[2].ability.name}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="stats-base">
              <h2>Stats Base</h2>
              <div className="responsive-stats">
                <p>
                  <b>HP: </b>
                </p>
                <div className="progress-bar">
                  <div
                    className="content"
                    style={{ width: `${pokemon.stats?.[0]?.base_stat / 1.5}%` }}
                  >
                    {pokemon.stats?.[0]?.base_stat}/150
                  </div>
                </div>

                <p>
                  <b>Speed: </b>
                </p>
                <div className="progress-bar">
                  <div
                    className="content"
                    style={{ width: `${pokemon.stats?.[5]?.base_stat / 1.5}%` }}
                  >
                    {pokemon.stats?.[5]?.base_stat}/150
                  </div>
                </div>

                <p>
                  <b>Deffense: </b>
                </p>
                <div className="progress-bar">
                  <div
                    className="content"
                    style={{ width: `${pokemon.stats?.[1]?.base_stat / 1.5}%` }}
                  >
                    {pokemon.stats?.[1]?.base_stat}/150
                  </div>
                </div>

                <p>
                  <b>Atack: </b>{" "}
                </p>
                <div className="progress-bar">
                  <div
                    className="content"
                    style={{ width: `${pokemon.stats?.[2]?.base_stat / 1.5}%` }}
                  >
                    {pokemon.stats?.[2]?.base_stat}/150
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="last-info">
            <div className="movements">
              <h2>Movements</h2>
              <div className="responsive-movements">
                {pokeMoves?.map((poke) => (
                  <p key={poke.move.url}>{poke.move.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexInfo;
