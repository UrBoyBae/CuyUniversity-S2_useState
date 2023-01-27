import { Container, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Navigation = ({ navValue }) => {
  return (
    <Navbar>
      <div>
        <Navbar>
          <Container>
            <NavbarBrand href="#" >Home</NavbarBrand>
            <NavLink href="#" target="_blank">
              {navValue != "" ? navValue : "About"}
            </NavLink>
            <NavbarToggle/>
            <NavbarCollapse className="justify-content-end"></NavbarCollapse>
          </Container>
        </Navbar>
      </div>
    </Navbar>
  );
};

export default Navigation;
