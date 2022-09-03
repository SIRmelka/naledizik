import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context';
import MiniLoader from './MiniLoader';
import Playlist from './Playlist';

const HomePlaylists = () => {

    const {getData,setPlayingPlaylist} = useContext(UserContext)
    const [playlists,setPlaylists] = useState([])
    const navigate = useNavigate()
    const [isloading,setIsLoading] = useState(true)

    function changePlaylist(id)
    
    {
        setPlayingPlaylist(id)
        navigate("./playlist",{replace:true})
    }


    useEffect(()=>{
            getData.getFeaturedPlaylists({limit:8})
            .then((data)=>{
                setPlaylists(data.playlists.items);
                setIsLoading(false)
            })
        },[]
    )
        console.log(playlists);
        console.log(isloading);
    return (
        <div className='playlists'>
                        <div className='playlists-header'>
                            <span><h1>Playlists</h1></span>
                           
                        </div>
                        <div className='playlists-body'>
                            {
                               !isloading?
                               playlists.map((playlist)=>{
                                
                                     return(  
                                        playlist&&
                                        <Playlist 
                                            key={1}
                                            changePlaylist={()=>changePlaylist(playlist.id)}
                                            playlistName={playlist.name}
                                            tracksNumber={playlist.tracks.total}
                                            background={playlist.images[0].url}
                                           
                                        />)
                                }):<MiniLoader/>
                            }
                            
                        </div>
        </div>
    );
};

export default HomePlaylists;