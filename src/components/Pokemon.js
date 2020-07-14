import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const { pokemon, setPokemonList } = props;

    const [display, setDisplay ] = useState([]);

    const onClick = () => {
        axios.get(pokemon[0].url)
            .then(response => {
                setDisplay(response.data.results);
            })
    }
    return (
        <div>
            <div>
                <button onClick = { onClick }> Get them pokeMONS!! </button>
            </div>

            <div>
                <ul>
                    {
                        display.map((item, i) => 
                            <li key ={i}> {i} - {item.name} </li>
                        )
                    }
                </ul>
            </div>

            
            
        </div>
    )
}

export default Pokemon
