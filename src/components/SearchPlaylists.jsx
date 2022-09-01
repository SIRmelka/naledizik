import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context';
import Playlist from './Playlist';

const SearchPlaylists = () => {

    const {getData,searchingTerm,setPlayingPlaylist} = useContext(UserContext)
    const [playlists,setPlaylists] = useState([])
    const navigate = useNavigate()

    function changePlaylist(id)
    
    {
        setPlayingPlaylist(id)
        navigate("../playlist",{replace:true})
    }

    useEffect(()=>{
            getData.searchPlaylists(searchingTerm,{limit:4})
            .then((data)=>{
                setPlaylists(data.playlists.items);
            })
        },[searchingTerm]
    )
    

    return (
        <div className='playlists'>
                        <div className='playlists-header'>
                            <span><h1>Playlists<span className='results'></span></h1></span>
                            <span><p>see more</p></span>
                        </div>
                        <div className='playlists-body'>
                            {
                               playlists?
                               
                               playlists.map((playlist)=>{
                                   
                                     return(   <Playlist
                                            playlistName={playlist.name}
                                            changePlaylist={()=>changePlaylist(playlist.id)}
                                            tracksNumber={11}
                                            background={playlist.images.length!==0&&playlist.images[0].url}
                                            key={playlist.id}
                                        />)
                                }):"sd"
                            }
                            
                        </div>
        </div>
    );
};

export default SearchPlaylists;