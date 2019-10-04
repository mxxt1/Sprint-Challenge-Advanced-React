import React, {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
    
    const [storedValue,setStoredValue] = useState(() =>{
        const entry = window.localStorage.getItem(key);
        return entry ? JSON.parse(entry) : initialValue;
    })//useState

    const setValue = value => {
        console.log(value);
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }//setValue
    
    
    
    return [storedValue, setValue];

}//useLocalStorage

export default useLocalStorage
