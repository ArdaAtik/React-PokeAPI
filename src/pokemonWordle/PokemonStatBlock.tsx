import React, { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { Pokedex, Type } from "./pokemonItemProps";
import { EvolvePokemonProps } from "./EvolvePokemonProps";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { PokemonInput } from "./PokemonInput";
import "./styles.css";
import { TbPokeball } from "react-icons/tb";
interface pokeEvtProps {
  names: string[];
  eVt: number;
}
export interface pokemonStatBlockProps {
  itemIndex: number;
  selectedPokemon: string;
  isDone: boolean[];
  setIsDone: React.Dispatch<React.SetStateAction<boolean[]>>;
  setSelectedPokemon: React.Dispatch<React.SetStateAction<string>>;
  findPoke: (name: string) => void;
  submittedPokemon: Pokedex[];
  randomPokemon: Pokedex;
  pokeEvt: pokeEvtProps[];
}

const PokemonStatBlock = ({
  itemIndex,
  selectedPokemon,
  isDone,
  setIsDone,
  setSelectedPokemon,
  findPoke,
  submittedPokemon,
  randomPokemon,
  pokeEvt,
}: pokemonStatBlockProps) => {
  const compareTypes = (randomType: Type[], selectedType: Type[]) => {
    var firstType = randomType.some((val) => {
      return val.type.name == selectedType[0].type.name;
    });
    var secondType = randomType.some((val) => {
      return val.type.name == selectedType[1]?.type.name;
    });

    return (
      <>
        <span>
          {firstType ? (
            <div className="text-success">{selectedType[0].type.name}</div>
          ) : (
            <div className="text-danger">{selectedType[0].type.name}</div>
          )}
        </span>
        <span>
          {secondType ? (
            <div className="text-success">{selectedType[1]?.type.name}</div>
          ) : (
            <div className="text-danger">{selectedType[1]?.type.name}</div>
          )}
        </span>
      </>
    );
  };

  const compareStats = (selectedStat: number, randomStat: number) => {
    return selectedStat > randomStat ? (
      <AiOutlineArrowDown />
    ) : selectedStat < randomStat ? (
      <AiOutlineArrowUp />
    ) : (
      <AiOutlineCheck />
    );
  };

  const getInputIndex = () => {
    let val = 0;
    const equals = (a: boolean[], b: boolean[]) =>
      JSON.stringify(a) === JSON.stringify(b);
    const falses = [false, false, false, false, false];
    if (isDone[0] == false) {
      val = 0;
    } else if (equals(isDone, [true, ...falses.slice(1, 5)])) {
      val = 1;
    } else if (equals(isDone, [true, true, ...falses.slice(2, 5)])) {
      val = 2;
    } else if (equals(isDone, [true, true, true, ...falses.slice(3, 5)])) {
      val = 3;
    } else if (
      equals(isDone, [true, true, true, true, ...falses.slice(4, 5)])
    ) {
      val = 4;
    }
    return val;
  };

  const compareEvts = () => {
    console.log(
      getEvt(randomPokemon.name) ===
        getEvt(submittedPokemon[itemIndex + 1].name),
      getEvt(randomPokemon.name),
      getEvt(submittedPokemon[itemIndex + 1].name)
    );

    return getEvt(randomPokemon.name) ===
      getEvt(submittedPokemon[itemIndex + 1].name) ? (
      <div className="text-success">
        {getEvt(submittedPokemon[itemIndex + 1].name)}
      </div>
    ) : (
      <div className="text-danger">
        {getEvt(submittedPokemon[itemIndex + 1].name)}
      </div>
    );
  };
  const getEvt = (pokemonName: string) => {
    let value;
    pokeEvt.map((poke) => {
      if (poke.names.some((name) => name === pokemonName)) {
        value = poke.names.length;
      }
    });
    return value;
  };

  return (
    <>
      {!isDone[itemIndex] ? (
        <div>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (selectedPokemon == "") {
                alert("Enter a pokemon");
              } else {
                setIsDone((prev) =>
                  prev.map((bol, index) => (index === itemIndex ? !bol : bol))
                );
                setSelectedPokemon("");
                findPoke(selectedPokemon);
              }
            }}
          >
            <InputGroup size="sm" className="mt-2 text-capitalize">
              <Form.Control
                onChange={(e) => {
                  setSelectedPokemon((prev) =>
                    getInputIndex() === itemIndex ? e.target.value : prev
                  );
                }}
                placeholder="Pokemon"
                type="text"
                className="text-capitalize border border-white "
                value={getInputIndex() === itemIndex ? selectedPokemon : ""}
              />
              <Button variant="dark" className="border" type="submit">
                <TbPokeball />
              </Button>
            </InputGroup>
          </Form>
        </div>
      ) : (
        <div></div>
      )}
      {isDone[itemIndex] ? (
        <div>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="d-flex justify-content-around text-white text-center  ">
              <Form.Label className="">
                {submittedPokemon[itemIndex + 1]?.name}
              </Form.Label>
              <Form.Label className="">
                <span>
                  {compareTypes(
                    randomPokemon.types,
                    submittedPokemon[itemIndex + 1]?.types
                  )}
                </span>
              </Form.Label>
              <Form.Label className="">{compareEvts()}</Form.Label>
              <Form.Label className="">
                {" "}
                {compareStats(
                  submittedPokemon[itemIndex + 1]?.stats[0].base_stat,
                  randomPokemon.stats[0].base_stat
                )}
              </Form.Label>
              <Form.Label className="">
                {" "}
                {compareStats(
                  submittedPokemon[itemIndex + 1]?.stats[1].base_stat,
                  randomPokemon.stats[1].base_stat
                )}
              </Form.Label>
              <Form.Label className="">
                {" "}
                {compareStats(
                  submittedPokemon[itemIndex + 1]?.stats[2].base_stat,
                  randomPokemon.stats[2].base_stat
                )}
              </Form.Label>
              <Form.Label className="">
                {" "}
                {compareStats(
                  submittedPokemon[itemIndex + 1]?.stats[5].base_stat,
                  randomPokemon.stats[5].base_stat
                )}
              </Form.Label>
            </Form.Group>
          </Form>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default PokemonStatBlock;
