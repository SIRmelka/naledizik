import React from 'react';
import { useRef } from 'react';
import {FiSearch} from 'react-icons/fi'

const SearchBar = () => {

    const searchIcon = useRef()

    function getFocus(){
       
        searchIcon.current.focus()
    }

    return (
        <div className='searchBar'>
            <FiSearch onClick={getFocus}/>
            <input ref={searchIcon} placeholder='Rechercher'></input>
        </div>
    );
};

export default SearchBar;