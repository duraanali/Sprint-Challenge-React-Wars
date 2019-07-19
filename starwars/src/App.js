import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import axios from "axios"

import StarwarsCharacters from "./components/StarwarsCharacters"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chars, setChar] = useState([]);

  const fetchCharacters = () => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(chars => {
        console.log(chars);
        setChar(chars.data.results);
      })
      .catch(err => console.log("YOU DONE BROKE IT!"));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Container>
      <Header>React Wars</Header>
      <StarwarsCharacters chars={chars} />
    </Container>
  );
}

const Header = styled.h1`
font-size: 75px;
`

const Container = styled.div`
display: flex;
flex-flow: column wrap;
align-items: center
justify-content: center;
`

export default App;