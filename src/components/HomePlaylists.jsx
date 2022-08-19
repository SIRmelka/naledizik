import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext} from 'react';
import UserContext from '../context';
import Playlist from './Playlist';

const HomePlaylists = () => {

    const {getData} = useContext(UserContext)
    const [playlists,setPlaylists] = useState([])


    useEffect(()=>{
            getData.getFeaturedPlaylists({limit:8})
            .then((data)=>{
                setPlaylists(data.playlists.items);
            })
        },[]
    )
       
    console.log(playlists);

    return (
        <div className='playlists'>
                        <div className='playlists-header'>
                            <span><h1>Playlists</h1></span>
                            <span><p>see more</p></span>
                        </div>
                        <div className='playlists-body'>
                            {
                               playlists?
                               
                               playlists.map((playlist)=>{
                                  
                                     return(   <Playlist
                                            playlistName={playlist.name}
                                            tracksNumber={11}
                                            background={playlist.images[0].url}
                                            key={playlist.id}
                                        />)
                                }):"sd"
                            }
                            
                        </div>
        </div>
    );
};

export default HomePlaylists;