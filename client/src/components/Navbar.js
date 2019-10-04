import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import styled from 'styled-components';


const Navbar = (props) => {
    console.log(props)
    
    const [toggle, setToggle] = useDarkMode(false);

    const darkToggle = e => {
        e.preventDefault();
        console.log(`darkMode toggled correctly`)
        setToggle(!toggle);
    }




    return (
        <div>
            <button data-testid='navbutton' onClick={darkToggle}>Dark Mode</button>        
        </div>
    )
}

export default Navbar
