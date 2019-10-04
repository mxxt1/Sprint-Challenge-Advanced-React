import React from 'react'
import styled from 'styled-components';


const Card = styled.div`
    display:flex;
    flex-direction: column;
    width: 30%;
    min-height:300px;
    border: 2px solid black;
    padding: 2%;
    margin: 2%;
    background-color: rgba(160,160,160,.4);
`;



const PlayerCard = (props) => {
    console.log(props);
    return ( 
        <Card>
            <h1>{props.data.name}</h1>
            <h3>Searches: {props.data.searches}</h3>
            <p>Country: {props.data.country}</p>
            <p>ID: {props.data.id}</p>
        </Card>
    );
//end Playercard

};


export default PlayerCard




