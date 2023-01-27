import "./App.css";
import Navigation from "./components/Navigation";
import { Button, Container } from "react-bootstrap";
import React, { useState } from "react";

function App() {
  const [getNavbarValue, setNavbarValue] = useState("");
  const changeNavbarValue = () => {
    setNavbarValue("My Contact");
  };

  return (
    <Container>
      <Navigation navValue = {getNavbarValue}/>
      <p>{getNavbarValue}</p>
      <Button variant="dark" onClick={() => changeNavbarValue()}>
        Ubah
      </Button>
    </Container>
  );
}

export default App;
