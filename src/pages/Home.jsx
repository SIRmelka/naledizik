import React from 'react';
import Playlist from '../components/Playlist';
import PresentationBanner from '../components/PresentationBanner';
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

                <div className='middle'>
                    <PresentationBanner/>
                    <div className='playlists'>
                        <div className='playlists-header'>
                            <span><h1>Playlists</h1></span>
                            <span><p>see more</p></span>
                        </div>
                        <div className='playlists-body'>
                            <Playlist />
                            <Playlist/>
                            <Playlist />
                            <Playlist />
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Home;