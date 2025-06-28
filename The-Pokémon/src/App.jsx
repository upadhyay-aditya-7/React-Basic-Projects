import React, { useState } from "react";
import PokeCard from "./components/PokeCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);
  const [category, setCategory] = useState("fire");
  const [pokemonUrls, setPokemonUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPokemonUrls([]);

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${category}`);
      const data = await res.json();

      const selected = data.pokemon
        .sort(() => 0.5 - Math.random())
        .slice(0, count)
        .map((p) => p.pokemon.url);

      setPokemonUrls(selected);
    } catch (err) {
      console.error("Failed to fetch Pokémon:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Pokémon Card Viewer</h1>
      <form onSubmit={handleFetch}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min="1"
          max="100"
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="flying">Flying</option>
          <option value="bug">Bug</option>
          <option value="fighting">Fighting</option>
        </select>
        <button type="submit">Get Pokémon</button>
      </form>

      <hr/>
      <hr/>

      {loading && <p>Loading...</p>}

      <div className="card-container">
        {pokemonUrls.map((url, index) => (
          <PokeCard key={index} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
