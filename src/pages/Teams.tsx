import { useEffect, useState } from "react";
import { EvolvePokemonProps, Chain } from "../pokemonWordle/EvolvePokemonProps";
import axios from "axios";
import chain from "./chain.json";

interface pokeEvtProps {
  names: string[];
  eVt: number;
}

export function Teams() {
  const [pokeChain, setPokeChain] = useState<Chain[]>([chain]);
  const [state, setState] = useState<string>("");
  const [pokeEvt, setPokeEvt] = useState<pokeEvtProps[]>([
    { names: [], eVt: 0 },
  ]);

  let numbers = Array.from({ length: 78 }, (_, i) => i + 1);

  useEffect(() => {
    getPokemonSpecies();
    getEvT(pokeChain);
    console.log(pokeEvt);
  }, []);

  const getPokemonSpecies = async () => {
    numbers.map(async (item) => {
      let url = `https://pokeapi.co/api/v2/evolution-chain/${item}/`;
      const res = await axios.get(url);
      const evolvePokSpecies: EvolvePokemonProps = res.data;
      setPokeChain((chain) => [...chain, evolvePokSpecies.chain]);
    });
  };

  const getEvT = (evolveChainArray: Chain[]) => {
    evolveChainArray.map((evolveChain, index) => {
      let evt = [
        evolveChain.species.name,
        evolveChain.evolves_to[0]?.species.name,
        evolveChain.evolves_to[0]?.evolves_to[0]?.species.name,
      ];

      const nonsparsed = evt.filter((n) => n != undefined);
      setPokeEvt((prev: pokeEvtProps[]) => {
        return [...prev, { names: nonsparsed, eVt: nonsparsed.length }];
      });
    });
  };

  const selectEvt = (PokeName: string) => {
    return pokeEvt.map((poke) => {
      poke.names.some((name) => name === PokeName) ? poke.names.length : false;
    });
  };

  return (
    <div className="text-white">
      <input
        placeholder="Enter Pokemon"
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <button
        onClick={() => {
          selectEvt(state);
        }}
      >
        Submit
      </button>
    </div>
  );
}
