import React from 'react';
import {AiFillHome} from 'react-icons/ai'
import {GoSearch} from 'react-icons/go'
import {TbPlaylist} from 'react-icons/tb'
import {FaHeadphones} from 'react-icons/fa'
import ThemeToggler from './ThemeToggler';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    return (
        <div className='side-bar'>
            <div className='logo'>
                <img src="./assets/logo.png" alt="" />
            </div>

            <div className='menu'>
                <p>Menu</p>
                <ul>
                    <NavLink to={"./"} 
                    className={({ isActive }) => 
                    (isActive && "is-active")}
                    >
                    <li>
                        <span className="nav-icon"><AiFillHome/></span>
                        <span className="nav-element">Acceuil</span>
                    </li></NavLink>

                    <NavLink to={"./search"}
                    className={({ isActive }) => 
                    (isActive && "is-active")}
                    >
                    <li>
                        <span className='nav-icon'><GoSearch/></span>
                        <span className="nav-element">Search</span>
                    </li></NavLink>

                    <NavLink to={"./playlists"}
                    className={({ isActive }) => 
                    (isActive ? "is-active" : "is-not-active")}
                    >
                   <li>
                        <span className='nav-icon'><TbPlaylist/></span>
                        <span className="nav-element">Playlists</span>
                    </li></NavLink>
           
                    <NavLink to={"./albums"}
                    className={({ isActive }) => 
                    (isActive && "is-active")}
                    >
                    <li>
                        <span className='nav-icon'><FaHeadphones/></span> 
                        <span className="nav-element">Albums</span>
                    </li></NavLink>
                </ul>
            </div>

            <div className='settings'>
                <p>Préférences</p>
                <ul>
                    <li>
                        <span className='nav-element'>Dark mode</span>
                        <span className='toggler'><ThemeToggler/></span></li>
                    {/* <li><span><img src="./assets/french.svg" alt="flag"></img></span></li> */}
                </ul>
            </div>

            <div className='legal-mentions'>
                <p>Copyright Naledi 2022</p>
            </div>
        </div>
    );
};

export default SideBar;