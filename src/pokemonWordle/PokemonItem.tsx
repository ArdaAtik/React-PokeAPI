import React from "react";
import { Card, Container } from "react-bootstrap";
import { Pokedex } from "./pokemonItemProps";
import "./styles.css";

interface pokemonItemProps extends Pokedex {
  setSelectedPokemon: React.Dispatch<React.SetStateAction<string>>;
}

const PokemonItem = ({
  name,
  types,
  id,
  moves,
  forms,
  sprites,
  stats,
  setSelectedPokemon,
}: pokemonItemProps) => {
  return (
    <>
      <Card
        className="pokemonItemCard"
        onClick={() => {
          setSelectedPokemon(forms[0].name);
        }}
        style={{
          width: "64px",
          height: "64px",
          background: "none",
          border: "none",
          padding: 0,
          marginLeft: 0,
        }}
      >
        <Card.Img src={sprites.front_default} className="single_pokemon_item" />
      </Card>
    </>
  );
};

export default PokemonItem;
