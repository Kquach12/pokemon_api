import React, {useState, useEffect} from 'react'

const Pokemons = (props) => {
    const [pokemonArray, setPokemonArray] = useState([]);
    const [count, setCount] = useState("")
    const [isRequested, setIsRequested] = useState("")

    useEffect(() => {
        console.log(count)
        fetch(`https://pokeapi.co/api/v2/${count}`)
            .then(response => response.json())
            .then(response => setPokemonArray(response.results))
    },[count]);

    const getAll = () =>{
        setCount("pokemon?limit=807")
        setIsRequested(!isRequested)
    }

    return (
        <div>
            <button onClick={getAll}>Fetch Pokemons</button>
            {isRequested? 
            pokemonArray.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            }): ""}
        </div>
    );
}

export default Pokemons