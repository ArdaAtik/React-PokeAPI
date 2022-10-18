import { Container, Navbar as NavbarBs, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs className="bg-black shadow mb-3 ">
      <Container>
        <Nav>
        
          <Nav.Link className="text-white" to="/pokemon" as={NavLink}>
            Pokemon Wordle
          </Nav.Link>
         
        </Nav>
      </Container>
    </NavbarBs>
  );
}
