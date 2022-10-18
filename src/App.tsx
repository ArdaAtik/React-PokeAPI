import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import PokemonWordle from "./pokemonWordle/PokemonWordle";

function App() {
  return (
    <>
      <Navbar />
      <Container className="modal-background">
        <Routes>
          <Route path="pokemon" element={<PokemonWordle />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
