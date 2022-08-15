import React from 'react';
import {AiFillHome} from 'react-icons/ai'
import {GoSearch} from 'react-icons/go'
import {TbPlaylist} from 'react-icons/tb'
import {FaHeadphones} from 'react-icons/fa'
import ThemeToggler from './ThemeToggler';

const SideBar = () => {
    return (
        <div className='side-bar'>
            <div className='logo'>
                <h1>Naledi</h1>
            </div>

            <div className='menu'>
                <p>Menu</p>
                <ul>
                    <li>
                        <span className="nav-icon"><AiFillHome/></span>
                        <span className="nav-element">Acceuil</span>
                    </li>

                    <li>
                        <span className='nav-icon'><GoSearch/></span>
                        <span className="nav-element">Search</span>
                    </li>

                    <li>
                        <span className='nav-icon'><TbPlaylist/></span>
                        <span className="nav-element">Playlist</span>
                    </li>

                    <li>
                        <span className='nav-icon'><FaHeadphones/></span> 
                        <span className="nav-element">Albums</span>
                    </li>
                </ul>
            </div>

            <div className='settings'>
                <p>Préférences</p>
                <ul>
                    <li>
                        <span className='nav-element'>Dark mode</span>
                        <span className='toggler'><ThemeToggler/></span></li>
                    <li><span><img src="./assets/french.svg" alt="flag"></img></span></li>
                </ul>
            </div>

            <div className='legal-mentions'>
                <p>Copyright Naledi 2022</p>
            </div>
        </div>
    );
};

export default SideBar;