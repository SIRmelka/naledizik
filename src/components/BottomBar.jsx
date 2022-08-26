import React from 'react';
import {AiFillHome} from 'react-icons/ai'
import {GoSearch} from 'react-icons/go'
import {TbPlaylist} from 'react-icons/tb'
import {FaHeadphones} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const BottomBar = () => {

    return (

            <div className='bottom-menu'>
                <ul>
                    <NavLink to={"./"} 
                    className={({ isActive }) => 
                    (isActive && "is-active")}
                    >
                    <li>
                        <span className="nav-icon"><AiFillHome/></span>
                    
                    </li></NavLink>

                    <NavLink to={"./search"}
                    className={({ isActive }) => 
                    (isActive && "is-active")}
                    >
                    <li>
                        <span className='nav-icon'><GoSearch/></span>
                       
                    </li></NavLink>

                    <NavLink to={"./playlists"}
                    className={({ isActive }) => 
                    (isActive ? "is-active" : "is-not-active")}
                    >
                   <li>
                        <span className='nav-icon'><TbPlaylist/></span>
                      
                    </li></NavLink>
           
                    <NavLink to={"./albums"}
                    className={({ isActive }) => 
                    (isActive && "is-active")}
                    >
                    <li>
                        <span className='nav-icon'><FaHeadphones/></span> 
                        
                    </li></NavLink>
                </ul>
            </div>

    );
};

export default BottomBar;