// src/components/PokeCard.js
import React, { useEffect, useState } from "react";
import "./PokeCard.css";

const PokeCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        console.error("Error fetching Pokémon data:", err);
      }
    };

    fetchData();
  }, [url]);

  if (!pokemon) return <div className="card">Loading...</div>;

  return (
    <div className="card">
      <h3>{pokemon.name}</h3>
      <hr />
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      <p>Type: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
    </div>
  );
};

export default PokeCard;
