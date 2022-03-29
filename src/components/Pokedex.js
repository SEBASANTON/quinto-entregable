import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import PokedexCard from './PokedexCard';
import '../styles/Pokedex.css'
import fondo from '../assets/pokebola.png'

const Pokedex = () => {

    const userName = useSelector( state => state.userName);
    const navigate = useNavigate();

    const [ pokemons, setPokemons ] = useState([]);
    const [ pokemonName, setPokemonName ] = useState("");
    const [ types, setTypes ] = useState([]);

    //https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126
    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                setPokemons(res.data.results)
                /* console.log(res.data.results) */
            });
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => {
                setTypes(res.data.results)
                console.log(res.data .results)
            })
    },[]);

    const submit = e => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonName}`)
    }

    const handleType = e =>{
        console.log(e.target.value)
        axios.get(e.target.value)
            .then(res =>{
                setPokemons(res.data.pokemon) 
                console.log(res.data.pokemon)
            })  
    }

    const [page, setPage] = useState(1);
    const itemsNumber = 8
    const lastIndex = page * itemsNumber;
    const firstIndex = lastIndex-itemsNumber;
    const pokemonPaginated = pokemons.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(pokemons.length/itemsNumber);
    const pagesNumbers = [];
    for (let i = 1 ; i <= totalPages; i++){
        pagesNumbers.push(i)
    }



    return (
        <div className="pokedex">
            <img className="img-welcome"src={fondo} alt="" />

            <h1>Pokedex</h1>
            <p>Welcome {userName}, here you can find you favorite pokemon.</p>

            <div className="select">
                <select onChange={handleType} className="options" >

                    {
                        types.map(type => (
                            <option key={type.url} value={type.url}>
                                {type.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <form className="input-container" onSubmit={submit}>
                <label htmlFor="character-name"/>
                <input 
                    type="text" 
                    id="character-name"
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)}
                    placeholder="Search Here..."
                    />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <div className="Card-responsive">
                {
                    pokemonPaginated.map(pokemon => (
                            <PokedexCard 
                                pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
                                key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            />
                    ))
                }
            </div>
            <div className="responsive-buttons">
            <button 
                onClick={() =>setPage(page-1)}
                disabled={page <= 1}
            >
                <i className="fa-solid fa-backward"></i>
            </button>
                {
                    pagesNumbers.map(page =>
                        <button onClick={() => setPage(page)} key={page}>
                            {page}
                        </button>
                        )
                }
            <button
                onClick={() => setPage(page+1)}
                disabled={page >= totalPages}    
            >
                <i className="fa-solid fa-forward"></i>
            </button>
            </div>
        </div>
    );
};

export default Pokedex;