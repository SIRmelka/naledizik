import React from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context';

const SearchBar = () => {

    const searchInput = useRef()
    const location = useNavigate()

    const {setSearchingTerm} = useContext(UserContext)
  

    function searchData(){
        // alert(window.location.pathname);
        window.location.pathname=="/search"?
           setSearchingTerm(searchInput.current.value):
            location("./search")
     
    }
    

    function getFocus(){
       
        // searchIcon.current.focus()
    }

    return (
        <div className='searchBar'>
            <FiSearch onClick={getFocus}/>
            <input onChange={searchData} ref={searchInput} placeholder='Rechercher'></input>
        </div>
    );
};

export default SearchBar;