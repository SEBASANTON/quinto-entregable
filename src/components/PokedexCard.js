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
    const type = pokemon?.types?.[0]?.type?.name;
    useEffect(() =>{
        switch(type){
            case "grass":
                setPokeColor('linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)');
                break 
            case "fire":
                setPokeColor('linear-gradient(178.92deg, #BB3638 0.92%, #C76556 47.96%, #F1C85D 99.08%)'/* 'linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 12.55%, #E8AE1B 175.72%)' */);
                break
            case "normal":
                setPokeColor('linear-gradient(178.92deg, #CA536C 0.92%, #D68B9B 47.96%, #BB71DB 99.08%)');
                break
            case "fighting":
                setPokeColor('linear-gradient(178.92deg, #CB5532 0.92%, #BF6E59  47.96%, #BCD58F 99.08%)');
                break
            case "flying":
                setPokeColor('linear-gradient(178.92deg, #7BD6C3 0.92%, #9FFBDE 47.96%, #FAAF8C  99.08%)');
                break
            case "poison":
                setPokeColor('linear-gradient(178.92deg, #985FCE 0.92%, #AB95BB 47.96%, #94E183 99.08%)');
                break
            case "ground":
                setPokeColor('linear-gradient(178.92deg, #996E2C 0.92%, #D0AB73 47.96%, #CFE976 99.08%)');
                break
            case "rock":
                setPokeColor('linear-gradient(178.92deg, #7E7E7E 0.92%, #B9B8B8 47.96%, #D6C8B6  99.08%)');
            break
            case "bug":
                setPokeColor('linear-gradient(178.92deg, #A1A124 0.92%, #C8C868 47.96%, #82CB80  99.08%)'/* '#999933' */);
                break
            case "ghost":
                setPokeColor('linear-gradient(178.92deg, #4C53E6 0.92%, #6E73CF 47.96%, #81F5F2 99.08%)');
                break
            case "steel":
                setPokeColor('linear-gradient(178.92deg, #2D896A 0.92%, #79998E 47.96%, #C1C384 99.08%)');
                break
            case "water":
                setPokeColor('linear-gradient(178.92deg, #3D86D2 0.92%, #8AB4DF 47.96%, #55CBAD 99.08%)');
                break
            case "electric":
                setPokeColor('linear-gradient(178.92deg, #F6F619 0.92%, #B9D74B 47.96%, #80DCBD 99.08%)'/* #FFFF33 */);
                break
            case "psychic":
                setPokeColor('linear-gradient(178.92deg, #1D9797 0.92%, #65B9B9 47.96%, #E1B385 99.08%)'/* #009999 */);
                break
            case "ice":
                setPokeColor('linear-gradient(178.92deg, #51B9E3 0.92%, #93D1EB 47.96%, #C8BAEC 99.08%)');
                break
            case "dragon":
                setPokeColor('linear-gradient(178.92deg, #C82D61 0.92%, #C8577F 47.96%, #A9C483 99.08%)');
                break
            case "fairy":
                setPokeColor('linear-gradient(178.92deg, #3BB039 0.92%, #6CDE6A 47.96%, #D8C090 99.08%)');
                break
            case "dark":
                setPokeColor('linear-gradient(178.92deg, #737373 0.92%, #6868A4 47.96%, #818181 99.08%)'/* #5A5E5D */);
                break
            default:
                setPokeColor("");
                break
        }
    },[type])
/* 868A88 */

    return (
    <div className="card" style={{background:pokeColor}}>
        <Link to={`/pokedex/${pokemon.id}`} className="link-card">
            <h2>{pokemon.name}</h2>
            <hr />
            <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            <hr />
            <p>
                {
                    pokemon.types?.length === 1 ?
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