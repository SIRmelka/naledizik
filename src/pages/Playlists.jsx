import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Playlist from '../components/Playlist';
import UserContext from '../context';

const Playlists = () => {

    const {getData,userId,setPlayingPlaylist} = useContext(UserContext)
    const [favoritePlaylist,SetFavouritePlayist] = useState([])
    const [playlists,setPlaylists] = useState([])
    const navigate = useNavigate()

    function changePlaylist(id)
    
    {
        setPlayingPlaylist(id)
        navigate("../playlist",{replace:true})
    }
    
    useEffect(()=>{
        getData.getUserPlaylists(userId)
        .then(data=>SetFavouritePlayist(data.items))

    },[])

    useEffect(()=>{
        getData.getFeaturedPlaylists({limit:8})
        .then(data=>setPlaylists(data.playlists.items))
    },[])

    console.log("fav",favoritePlaylist);
    console.log("all",playlists);

    return (
        <div>
            <h2>Your Playlists</h2>
            <div className='playlists'>
                <div className='playlists-body'>
            {   favoritePlaylist?
                favoritePlaylist.map((playlist)=>{
                    return <Playlist 
                    key={playlist.id} 
                    playlistName={playlist.name}
                    background={playlist.images[1].url}
                    tracksNumber={playlist.tracks.total}
                    changePlaylist={()=>changePlaylist(playlist.id)}
                    />
                }):"ss"
            }
                </div>
            </div>
            <h2>other Playlists</h2>

            <div className='playlists'>
                <div className='playlists-body'>
            {   playlists?
                playlists.map((playlist)=>{
                    return <Playlist 
                    key={playlist.id} 
                    playlistName={playlist.name}
                    background={playlist.images?playlist.images[0].url:""}
                    tracksNumber={playlist.tracks.total}
                    changePlaylist={()=>changePlaylist(playlist.id)}
                    />
                }):"ss"
            }
                </div>
            </div>
        </div>
    );
};

export default Playlists;