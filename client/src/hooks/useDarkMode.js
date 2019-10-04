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

    return [darkMode, setDarkMode]
}

export default useDarkMode
