import { Button, Form, InputGroup } from "react-bootstrap";
import { TbPokeball } from "react-icons/tb";
import { pokemonStatBlockProps } from "./PokemonStatBlock";

export const PokemonInput = ({
  selectedPokemon,
  setSelectedPokemon,
  setIsDone,
  isDone,
  findPoke,
}: pokemonStatBlockProps) => {
  return (
    <></>
    // {!isDone[itemIndex] ? (
    //   <div>
    //     <Form
    //       onSubmit={(e) => {
    //         e.preventDefault();
    //         findPoke(selectedPokemon);
    //       }}
    //     >
    //       <Form.Group className="d-flex justify-content-around text-white ">
    //         <Form.Label className="">
    //           {submittedPokemon[itemIndex]?.forms[0].name}
    //         </Form.Label>
    //         <Form.Label className="">
    //           <span>
    //             {compareTypes(
    //               randomPokemon.types,
    //               submittedPokemon[itemIndex]?.types
    //             )}
    //           </span>
    //         </Form.Label>
    //         <Form.Label className="">EvT</Form.Label>
    //         <Form.Label className="">
    // {compareStats(
    //   submittedPokemon[itemIndex]?.stats[1].base_stat,
    //   randomPokemon.stats[1].base_stat
    // )}
    //         </Form.Label>
    //         <Form.Label className="">
    //           {compareStats(
    //             submittedPokemon[itemIndex]?.stats[2].base_stat,
    //             randomPokemon.stats[2].base_stat
    //           )}
    //         </Form.Label>
    //         <Form.Label className="">
    //           {compareStats(
    //             submittedPokemon[itemIndex]?.stats[5].base_stat,
    //             randomPokemon.stats[5].base_stat
    //           )}
    //         </Form.Label>
    //         <Form.Label className="">
    //           {compareStats(
    //             submittedPokemon[itemIndex]?.stats[0].base_stat,
    //             randomPokemon.stats[0].base_stat
    //           )}
    //         </Form.Label>
    //       </Form.Group>
    //       <Button type="submit">Go back</Button>
    //     </Form>
    //   </div>
    // ) : (
    //   <div></div>
    // )}
  );
};
