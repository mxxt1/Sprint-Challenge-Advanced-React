import React from 'react'
import styled from 'styled-components';


const Card = styled.div`
    display:flex;
    flex-direction: column;
    width: 30%;
    border: 2px solid black;
    padding: 2%;
    margin: 2%;
`;


const PlayerCard = (props) => {
    console.log(props);
    return (
        <Card>
            <h1>{props.data.name}</h1>
            <p>{props.data.id}</p>
            <p>{props.data.country}</p>
            <h3>{props.data.searches}</h3>
        </Card>
    );
//end Playercard

};


export default PlayerCard




