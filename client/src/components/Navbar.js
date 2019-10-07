import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import styled from 'styled-components';


const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 2%;
`;

const NavContainer = styled.div`
    display:flex;
    justify-content: space-between;
    border-bottom: 4px solid rgba(160,160,160,.4);
    margin-bottom: 1.5%;
    padding: 0 2% 0 2%;
`;

const StyledH2 = styled.h2`
    margin: 2%;
    margin-left: 

`;

const Navbar = (props) => {
    console.log(props)
    
    const [toggle, setToggle] = useDarkMode(false);

    const darkToggle = e => {
        e.preventDefault();
        console.log(`darkMode toggled correctly`)
        setToggle(!toggle);
    }




    return (
    <NavContainer> 
        <StyledH2>Women's World Cup <br></br>Player Search Tracker</StyledH2>
        <ButtonContainer>
            <button data-testid='navbutton' onClick={darkToggle}>Dark Mode</button>        
        </ButtonContainer>
    </NavContainer> 
    )
}

export default Navbar
