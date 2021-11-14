import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemons = (props) => {
    const [pokemonArray, setPokemonArray] = useState([]);
    // const [count, setCount] = useState("")
    // const [isRequested, setIsRequested] = useState("")

    useEffect(() => {
        // console.log(count)
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
            .then(response => {setPokemonArray(response.data.results)})
    },[]);

    // const getAll = () =>{
    //     setCount("pokemon?limit=807")
    //     setIsRequested(!isRequested)
    // }

    return (
        <div>
            {/* <button onClick={getAll}>Fetch Pokemons</button> */}
            { 
            pokemonArray.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
}

export default Pokemons