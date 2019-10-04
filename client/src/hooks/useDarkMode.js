import React, {useEffect} from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);

    useEffect(() => {
        if (darkMode) {
            return document.querySelector('body').classList.add('dark-mode');
        } else {
            return document.querySelector('body').classList.remove('dark-mode');
        }
    }, [darkMode])//useEffect

    // useEffect(() => {
    //     if (darkMode) {
    //         document.querySelector('Card').classList.add('dark-card');
    //     } else {
    //         document.querySelector('Card').classList.remove('dark-card');
    //     }
    // }, [darkMode])//useEffect

    return [darkMode, setDarkMode]
}

export default useDarkMode





