import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context';
import MiniLoader from './MiniLoader';
import Playlist from './Playlist';

const SearchPlaylists = () => {

    const {getData,searchingTerm,setPlayingPlaylist} = useContext(UserContext)
    const [playlists,setPlaylists] = useState([])
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true)

    function changePlaylist(id)
    
    {
        setPlayingPlaylist(id)
        navigate("../playlist",{replace:true})
    }

    function seeMore(){
        navigate("../playlists",{replace:true})
    }

    useEffect(()=>{
        setLoading(true)
            getData.searchPlaylists(searchingTerm,{limit:4})
            .then((data)=>{
                setLoading(false)
                setPlaylists(data.playlists.items);
            })
        },[searchingTerm]
    )
    

    return (
        <div className='playlists'>
                        <div className='playlists-header'>
                            <span><h1>Playlists<span className='results'></span></h1></span>
                            <span onClick={()=>seeMore()}><p className='see-more'>see more</p></span>
                        </div>
                        <div className='playlists-body'>
                            {
                               !loading?
                               
                               playlists.map((playlist)=>{
                                   
                                     return(   <Playlist
                                            playlistName={playlist.name}
                                            changePlaylist={()=>changePlaylist(playlist.id)}
                                            tracksNumber={11}
                                            background={playlist.images.length!==0&&playlist.images[0].url}
                                            key={playlist.id}
                                        />)
                                }):<MiniLoader/>
                            }
                            
                        </div>
        </div>
    );
};

export default SearchPlaylists;