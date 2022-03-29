import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/PokedexCard.css'

const PokedexCard = ({pokemonUrl}) => {

    const [ pokemon, setPokemon ] = useState({});
/*     console.log(pokemonUrl)
 */
    useEffect(() => {
        axios.get(pokemonUrl)
            .then((res) =>{
                setPokemon(res.data)
                console.log(res.data)
            })
    },[pokemonUrl])

    const [pokeColor, setPokeColor ] = useState('white');

    useEffect(() =>{
        
        switch(pokemon?.types?.[0]?.type?.name){
            case "grass":
                setPokeColor('#02AC66');
                break 
            case "fire":
                setPokeColor('#E36B2C');
                break
            case "normal":
                setPokeColor('#BC6B7C');
                break
            case "fighting":
                setPokeColor('#CB735D');
                break
            case "flying":
                setPokeColor('#56A4AE');
                break
            case "poison":
                setPokeColor('#A564E3');
                break
            case "ground":
                setPokeColor('#D69638');
                break
            case "rock":
                setPokeColor('#8D8D94');
            break
            case "bug":
                setPokeColor('#999933');
                break
            case "ghost":
                setPokeColor('#787DDA');
                break
            case "steel":
                setPokeColor('#728881');
                break
            case "water":
                setPokeColor('#1479FB');
                break
            case "electric":
                setPokeColor('#FFFF33');
                break
            case "psychic":
                setPokeColor('#009999');
                break
            case "ice":
                setPokeColor('#64CBF5');
                break
            case "dragon":
                setPokeColor('#C23867');
                break
            case "fairy":
                setPokeColor('#3BB039');
                break
            case "dark":
                setPokeColor('#5A5E5D');
                break
            default:
                setPokeColor("");
                break
        }
    },[pokemon?.types?.[0]?.type?.name])


    return (
    <div className="card" style={{background:pokeColor}}>
        <Link to={`/pokedex/${pokemon.id}`} className="link-card">
            <h2>{pokemon.name}</h2>
            <hr />
            <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            <hr />
            <p>
                {
                    pokemon.types?.length == 1 ?
                    pokemon.types?.[0]?.type?.name :
                    `${pokemon.types?.[0]?.type?.name} / ${pokemon.types?.[1]?.type?.name}`
                }
           </p>
            <div className="responsive-text1">
                <p><b>HP</b><br/>{pokemon.stats?.[0]?.base_stat}</p>
                <p><b>Atack</b><br/> {pokemon.stats?.[1]?.base_stat}</p>
            </div>
            <div className = "responsive-text2">
                <p className="p-pri"><b>Deffense</b><br/>{pokemon.stats?.[2]?.base_stat}</p>
                <p className="p-ul"><b>Speed</b><br/>{pokemon.stats?.[5]?.base_stat}</p>
            </div>

        </Link> 
    </div>
    );
};

export default PokedexCard;