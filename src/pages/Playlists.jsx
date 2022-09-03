import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MiniLoader from '../components/MiniLoader';
import Playlist from '../components/Playlist';
import UserContext from '../context';

const Playlists = () => {

    const {getData,userId,setPlayingPlaylist,setLoading} = useContext(UserContext)
    const [favoritePlaylist,SetFavouritePlayist] = useState([])
    const [playlists,setPlaylists] = useState([])
    const navigate = useNavigate()
    const [loading,setLoader] = useState(true)
    const [loadingAll,setLoadingAll] = useState(true)

    setLoading(false)
    function changePlaylist(id)
    
    {
        setPlayingPlaylist(id)
        navigate("../playlist",{replace:true})
    }
    
    useEffect(()=>{
        getData.getUserPlaylists(userId)
        .then((data)=>{
            SetFavouritePlayist(data.items)
            setLoader(false)
        
        })
        

    },[])

    useEffect(()=>{
        getData.getFeaturedPlaylists({limit:8})
        .then((data)=>{
            setLoadingAll(false)
            setPlaylists(data.playlists.items)
        })
    },[])

    return (
        <div>
            <h2>Your Playlists</h2>
            <div className='playlists'>
                <div className='playlists-body'>
            {   !loading?
                favoritePlaylist.map((playlist)=>{
                    return <Playlist 
                    key={playlist.id} 
                    playlistName={playlist.name}
                    background={playlist.images>0?playlist.images[1].url:"https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-black-disk-decoration-illustration-image_1390176.jpg"}
                    tracksNumber={playlist.tracks.total}
                    changePlaylist={()=>changePlaylist(playlist.id)}
                    />
                }):<MiniLoader/>
            }
                </div>
            </div>
            <h2>other Playlists</h2>

            <div className='playlists'>
                <div className='playlists-body'>
            {   !loadingAll?
                playlists.map((playlist)=>{
                    return <Playlist 
                    key={playlist.id} 
                    playlistName={playlist.name}
                    background={playlist.images?playlist.images[0].url:""}
                    tracksNumber={playlist.tracks.total}
                    changePlaylist={()=>changePlaylist(playlist.id)}
                    />
                }):<MiniLoader/>
            }
                </div>
            </div>
        </div>
    );
};

export default Playlists;