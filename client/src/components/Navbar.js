import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import styled from 'styled-components';


const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 2%;
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
        <ButtonContainer>
            <button data-testid='navbutton' onClick={darkToggle}>Dark Mode</button>        
        </ButtonContainer>
    )
}

export default Navbar
