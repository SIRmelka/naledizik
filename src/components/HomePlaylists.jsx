import React from 'react';
// import { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context';
import Playlist from './Playlist';

const HomePlaylists = () => {

    const {getData} = useContext(UserContext)

    // useEffect(
    //     getData.getFeaturedPlaylists()
    //     .then((data)=>{
    //         console.log(data);
    //     })
    // )

    console.log(getData);
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