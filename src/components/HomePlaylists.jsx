import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context';
import Playlist from './Playlist';

const HomePlaylists = () => {

    const {getData,setPlayingPlaylist} = useContext(UserContext)
    const [playlists,setPlaylists] = useState([])
    const navigate = useNavigate()
    
    function changePlaylist(id)
    
    {
        setPlayingPlaylist(id)
        navigate("./playlist",{replace:true})
    }


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
                                
                                     return(  
                                        
                                        <Playlist 
                                            key={1}
                                            changePlaylist={()=>changePlaylist(playlist.id)}
                                            playlistName={playlist.name}
                                            tracksNumber={11}
                                            background={playlist.images[0].url}
                                           
                                        />)
                                }):"sd"
                            }
                            
                        </div>
        </div>
    );
};

export default HomePlaylists;