import React from 'react';
import Playlist from './Playlist';

const HomePlaylists = () => {
    return (
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
    );
};

export default HomePlaylists;