import React from 'react';
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import UserAvatar from '../components/UserAvatar';

const Home = () => {
    return (
        <div className='home'>
            <div className='sidebar-section'>
                  <SideBar/>
            </div>
            <div className='content-section'>
                <div className='top'>
                <div className='searchBar-section'> 
                    <SearchBar/>
                </div>
                <div className='avatar-section'> 
                    <UserAvatar/>
                </div>
                </div>
                
            </div>

        </div>
    );
};

export default Home;