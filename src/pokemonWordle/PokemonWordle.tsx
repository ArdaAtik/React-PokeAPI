import { useEffect, useMemo, useState } from "react";
import PokemonItem from "./PokemonItem";
import { Pokedex } from "./pokemonItemProps";
import { Col, Container, Form, Row } from "react-bootstrap";
import PokemonStatBlock from "./PokemonStatBlock";
import { EvolvePokemonProps, Chain } from "./EvolvePokemonProps";
import randomPoke from "./data/randomPokemon.json";
import randomPoke2 from "./data/randomPokemon_2.json";
import chain from "../pages/chain.json";
import MessageModal from "./ModalItems/MessageModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";

interface pokeEvtProps {
  names: string[];
  eVt: number;
}

const PokemonWordle = () => {
  interface Result {
    name: string;
    url: string;
  }
  let navigate = useNavigate();

  const [pokeData, setPokeData] = useState<Pokedex[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  const [isDone, setIsDone] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");
  const [submittedPokemon, setSubmittedPokemon] = useState<Pokedex[]>([
    randomPoke,
  ]);
  const [randomPokemon, setRandomPokemon] = useState<Pokedex>(randomPoke2);
  const [url, setUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  const [pokeChain, setPokeChain] = useState<Chain[]>([chain]);
  const [pokeEvt, setPokeEvt] = useState<pokeEvtProps[]>([
    { names: [], eVt: 0 },
  ]);

  useEffect(() => {
    submittedPokemon.map((submit, index) =>
      submit?.name == randomPokemon.name
        ? gameWon()
        : isDone[4] == true &&
          index == submittedPokemon.length - 1 &&
          gameLost()
    );
  }, [submittedPokemon]);

  const getRandomPokemon = () => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`
    )
      .then((res) => res.json())
      .then((data) => setRandomPokemon(data));
  };
  useEffect(() => {
    setPokeEvt((prev) => (prev = []));
    getEvT(pokeChain);
  }, [pokeChain]);

  useEffect(() => {
    getPokemonSpecies();
    pokeFun();
    getRandomPokemon();
  }, []);

  const pokeFun = useMemo(
    () => async () => {
      setLoading(true);
      const res = await axios.get(url);
      getPokemon(res.data.results);
      setLoading(false);
      console.log(res.data);
    },
    [url]
  );
  const getPokemon = useMemo(
    () => async (res: Result[]) => {
      res.map(async (item: Result) => {
        const result = await axios.get(item.url);
        setPokeData((item: Pokedex[]) => {
          if (res.length > item.length) {
            item = [...item, result.data];
            // console.log(res.length, item.length);
          }
          return item.sort((a: Pokedex, b: Pokedex) => a.id - b.id);
        });
      });
    },
    [pokeData]
  );

  const findPoke = (name: string) => {
    pokeData.find((item) => {
      item.name == name.toLowerCase()
        ? setSubmittedPokemon((prev) => [...prev, item])
        : false;
    });
  };
  const customInputItem = [1, 2, 3, 4, 5];

  const gameWon = () => {
    setMsg("You caught");
    setModalOpen(true);
    setTimeout(() => navigate("/pokemon"), 1000);
  };
  const gameLost = () => {
    setMsg("You lost");
    setModalOpen(true);
  };
  let numbers = Array.from({ length: 78 }, (_, i) => i + 1);

  const getPokemonSpecies = async () => {
    numbers.map(async (item) => {
      let url = `https://pokeapi.co/api/v2/evolution-chain/${item}/`;
      const res = await axios.get(url);
      const evolvePokSpecies: EvolvePokemonProps = res.data;
      setPokeChain((chain) => [...chain, evolvePokSpecies.chain]);
    });
  };
  const getEvT = (evolveChainArray: Chain[]) => {
    evolveChainArray.map((evolveChain) => {
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
  return (
    <>
      {modalOpen && (
        <MessageModal
          setOpenModal={setModalOpen}
          msg={msg}
          name={randomPokemon.name}
        />
      )}

      <Container
        className="xs-pokedex modal-background"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="row">
          <div className="col-12">
            <Container className="pokedex_container bg-light rounded">
              {!loading ? (
                <Row
                  md={8}
                  lg={12}
                  xl={15}
                  xxl={15}
                  className="g-12"
                  style={{ justifyContent: "center" }}
                >
                  {pokeData.map((item: Pokedex, key: number) => (
                    <Col key={key}>
                      <PokemonItem
                        name={item.name}
                        types={item.types}
                        id={item.id}
                        moves={item.moves}
                        stats={item.stats}
                        sprites={item.sprites}
                        forms={item.forms}
                        setSelectedPokemon={setSelectedPokemon}
                      />
                    </Col>
                  ))}
                </Row>
              ) : (
                <div>Loading...</div>
              )}
            </Container>
            <Container className="pokemonForms margin-bottom-form">
              <Form style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                <Form.Group className="mb-3 text-center">
                  <Form.Group className="d-flex justify-content-around fw-bold text-white">
                    <Form.Label>POKEDEX</Form.Label>
                    <Form.Label>TYPE</Form.Label>
                    <Form.Label>EvT</Form.Label>
                    <Form.Label>HP</Form.Label>
                    <Form.Label>ATK</Form.Label>
                    <Form.Label>DEF</Form.Label>
                    <Form.Label>SPE</Form.Label>
                  </Form.Group>
                </Form.Group>
              </Form>
              {customInputItem.map((item, index) => (
                <PokemonStatBlock
                  itemIndex={index}
                  selectedPokemon={selectedPokemon}
                  setSelectedPokemon={setSelectedPokemon}
                  isDone={isDone}
                  setIsDone={setIsDone}
                  findPoke={findPoke}
                  submittedPokemon={submittedPokemon}
                  randomPokemon={randomPokemon}
                  pokeEvt={pokeEvt}
                />
              ))}
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PokemonWordle;
