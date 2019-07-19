import React from "react";
import Character from "./Character";
import styled from 'styled-components'

function StarwarsCharacters(props) {

    return (
        <Card>
            {props.chars.map(chars => (
                <Character chars={chars} />
            ))}
        </Card>
    );
}

const Card = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
background-color: white;
max-width: 30%;
width: 30%;
text-align: center;
`

export default StarwarsCharacters;