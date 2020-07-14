import React, { useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  const [pokemon, setPokemonList] = useState([
    {
      name :"",
      url: "https://pokeapi.co/api/v2/pokemon?limit=964&offset=0"
    }
  ])


  return (
    <div className="App">
      <Pokemon pokemon ={pokemon} setPokemonList = {setPokemonList} />
    </div>
  );
}

export default App;
